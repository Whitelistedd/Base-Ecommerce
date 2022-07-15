/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'
import { connect } from '../../../lib/connection'
import { CartProductType } from '../../../src/components/Cart/Cart.model'
import { ProductDataType } from '../../../src/components/GlobalTypes.model'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(500).json({ message: 'not a GET request' })
  }

  try {
    const { OrderSchema } = await connect()
    let newOrder = await new OrderSchema(req.body)

    if (newOrder.products.length < 1) {
      return res
        .status(400)
        .json({ message: 'please add products to your cart' })
    }

    if (!newOrder) {
      return res
        .status(400)
        .json({ message: 'something is wrong with your order' })
    }

    if (newOrder.total <= 0) {
      return res
        .status(400)
        .json({ message: 'something is wrong with your order' })
    }

    /* взять все идентификаторы продуктов и количества */
    const productIDS: Array<{ id: string; qty: number }> =
      newOrder.products.map((item: CartProductType) => {
        return {
          id: item._id,
          qty: item.quantity,
        }
      })

    /* функция для получения всех сведений о продукте из базы данных */
    const confirmedProducts = await Promise.all(
      productIDS.map(async (product) => {
        return {
          qty: product.qty,
          product: (await OrderSchema.findOne({
            _id: product.id,
          })) as ProductDataType,
        }
      })
    ).catch((err) => console.log(err))

    /* функция проверки наличия всех товаров на складе из базы данных */
    confirmedProducts?.forEach(
      (Info: { qty: number; product: ProductDataType }) =>
        Info.product.inStock === false &&
        res.status(400).json({
          message:
            'one of the products are not inStock, please go to your cart and delete the item',
        })
    )

    let total = 0

    /* рассчитать цену */
    confirmedProducts?.forEach(
      (Info: { qty: number; product: ProductDataType }) =>
        (total += Info.product.price * Info.qty)
    )

    if (newOrder.shippingMethod === 'Cdek') {
      total += 700
    } else if (newOrder.shippingMethod === 'PochtaRussia') {
      total += 500
    } else {
      return res.status(500)
    }

    /* получить новую схему с ценой заказа */
    newOrder = await new OrderSchema({ ...newOrder._doc, total: total })

    /* получить адрес платежа от yandex kassa */
    const response = await axios.post(
      'https://api.yookassa.ru/v3/payments',
      {
        amount: {
          value: `${total}`,
          currency: 'RUB',
        },
        capture: true,
        confirmation: {
          type: 'redirect',
          return_url: `${process.env.APP_BASEURL}/order/success`,
        },
      },
      {
        headers: {
          'Idempotence-Key': `${newOrder.key}`,
          'Content-Type': 'application/json',
        },
        auth: {
          username: process.env.shopID as string,
          password: process.env.kassaPASS as string,
        },
      }
    )
    res.status(200).json(response.data)
    const ConfirmedOrder = await newOrder.save()
  } catch (error) {
    return res.status(500).json({ message: 'something went wrong' })
  }
}

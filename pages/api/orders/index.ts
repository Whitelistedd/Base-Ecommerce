/* eslint-disable @typescript-eslint/no-unused-vars */

import type { NextApiRequest, NextApiResponse } from 'next'

import { ProductDataType } from 'types/GlobalTypes.model'
import axios from 'axios'
import { connect } from 'lib/connection'
import { orderProductType } from 'lib/models/Order'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(500).json({ message: 'not a POST request' })
  }

  try {
    const { OrderSchema, ProductSchema } = await connect()
    let newOrder = await new OrderSchema(req.body)

    if (newOrder === undefined) {
      return res.status(400).json({ message: 'что-то не так с вашим заказом' })
    }

    if (newOrder.products.length < 1) {
      return res
        .status(400)
        .json({ message: 'пожалуйста, добавьте товар или товары в корзину' })
    }

    /* взять все идентификаторы продуктов и количества */
    const productIDS = newOrder.products.map((item: orderProductType) => {
      return {
        id: item._id,
        qty: item.quantity,
      }
    })

    /* функция для получения всех сведений о продукте из базы данных */
    const confirmedProducts = await Promise.all(
      productIDS.map(async (product: { id: string; qty: number }) => {
        return {
          qty: product.qty as unknown as number,
          product: (await ProductSchema.findOne({
            _id: product.id,
          })) as ProductDataType,
        }
      })
    ).catch((err) => console.log(err))

    /* функция проверки наличия всех товаров на складе из базы данных */
    console.log(confirmedProducts)
    confirmedProducts?.forEach(
      (Info) =>
        Info.product.inStock === false &&
        res.status(400).json({
          message:
            'одного из товаров нет в наличии, перейдите в корзину и удалите товар',
        })
    )

    let total = 0

    /* рассчитать цену */
    confirmedProducts?.forEach(
      (Info) => (total += Info.product.price * Info.qty)
    )

    if (newOrder.shippingMethod === 'Cdek') {
      total += 700
    } else if (newOrder.shippingMethod === 'PochtaRussia') {
      total += 500
    } else {
      return res.status(500)
    }

    /* получить новую схему с ценой заказа */
    newOrder = await new OrderSchema({ ...newOrder, total: total })

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
    console.log(error)
    return res.status(500).json({ message: 'something went wrong' })
  }
}

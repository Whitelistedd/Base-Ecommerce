/* извлечение всех продуктов из базы данных по идентификаторам продуктов, чтобы обновить сведения о продукте */

import { CartProductType, UpdateProductsType } from '../types/Cart.model'

import { UpdateProduct } from 'redux/slices/cart'
import { publicRequest } from 'requests'

export const UpdateProducts: UpdateProductsType = async (
  products,
  dispatch
) => {
  try {
    await Promise.all(
      products.map(async (product: CartProductType, index: number) => {
        const res = await publicRequest.get('/product/' + product._id)
        dispatch(
          UpdateProduct({
            index: index,
            oldproduct: product,
            newproduct: res.data,
          })
        )
      })
    )
  } catch (err) {
    console.log(err)
  }
}

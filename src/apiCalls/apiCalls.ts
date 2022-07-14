import { ProductDataType, queryKeyType } from '../components/GlobalTypes.model'
import { AllColors, AllSizes } from '../data'
import { publicRequest } from '../requests'
import { newCheckoutType, UpdateProductsType } from './apiCalls.model'

/* функция для оформления заказа и получения URL-адреса покупки */

export const newCheckout: newCheckoutType = async (idemp, order) => {
  try {
    const key = idemp
    const request = { key, ...order }
    const res = await publicRequest
      .post('/orders/', request)
      .then((response) => response)
      .catch((err) => err.response.data.message)
    return res.data.confirmation.confirmation_url
      ? res.data.confirmation.confirmation_url
      : res
  } catch (error) {}
}

/* извлечение всех продуктов из базы данных по идентификаторам продуктов, чтобы обновить сведения о продукте */

export const UpdateProducts: UpdateProductsType = async (products) => {
  try {
    return await Promise.all(
      products.map(async (product: ProductDataType, index: number) => {
        const res = await publicRequest.get('/products/find/' + product._id)
        return {
          index: index,
          oldproduct: product,
          newproduct: res.data,
        }
      })
    )
  } catch (err) {
    console.log(err)
  }
}

/* функция, чтобы получить выбранный продукт и получить все доступные размеры и цвета */
export const getProduct = async ({ queryKey }: { queryKey?: queryKeyType }) => {
  if (!queryKey) {
    return null
  }
  if (queryKey.length === 0) {
    return null
  }
  const Id = queryKey[1]
  const res = await publicRequest.get('/products/find/' + Id)

  const getAvailableColors = await AllColors.filter((color) =>
    res.data.color.includes(color.colorName)
  )
  const getAvailableSizes = await AllSizes.filter((size) =>
    res.data.size.includes(size.SizeName)
  )

  return { ...res.data, size: getAvailableSizes, color: getAvailableColors }
}

/* для получения всех продуктов */
export const getAllProducts = async () => {
  try {
    const response = await publicRequest.get(`/products?category=`)
    return response.data
  } catch (err) {
    return []
  }
}

export const getLimitedProducts = async () => {
  try {
    const response = await publicRequest.get(`/products`)
    return response.data
  } catch (err) {
    return []
  }
}

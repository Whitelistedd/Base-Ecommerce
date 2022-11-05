import { publicRequest } from 'requests'

/* для получения всех продуктов */
export const getAllProducts = async () => {
  try {
    const response = await publicRequest.get(`/products?category=`)
    return response.data
  } catch (err) {
    return []
  }
}

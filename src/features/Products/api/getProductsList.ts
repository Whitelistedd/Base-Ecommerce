import { getProductsListType } from '../types/getProductsList'
import { publicRequest } from 'requests'

/* для получения всех продуктов */
export const getAllProducts: getProductsListType = async (page: number) => {
  try {
    const response = await publicRequest.get(`/products?page=${page}&category=`)
    return response.data
  } catch (err) {
    return []
  }
}

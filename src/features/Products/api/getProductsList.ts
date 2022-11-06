import { filtersType } from 'types/GlobalTypes.model'
import { getProductsListType } from '../types/getProductsList'
import { publicRequest } from 'requests'

/* для получения всех продуктов */
export const getAllProducts: getProductsListType = async (
  page: number,
  filters: filtersType
) => {
  try {
    let queries = Object.keys(filters)
      .filter((filter) => filters[`${filter}`] && filters[`${filter}`])
      .map((filter) => `&${filter}=${filters[`${filter}`]}`)

    const response = await publicRequest.get(
      `/products?page=${page}${queries.join('')}`
    )
    return response.data
  } catch (err) {
    return []
  }
}

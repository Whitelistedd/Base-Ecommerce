import { publicRequest } from '@/requests'

/* для получения всех продуктов */
export const getCountries = async () => {
  try {
    const response = await publicRequest.get(`/countries`)
    return response.data
  } catch (err) {
    return []
  }
}

import { getReviewsType } from '../types/getReviews'
import { publicRequest } from '@/requests'

/* для получения всех продуктов */
export const getReviews: getReviewsType = async () => {
  try {
    const response = await publicRequest.get(`/reviews`)
    return response.data
  } catch (err) {
    return []
  }
}

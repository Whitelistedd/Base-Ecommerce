import { ReviewType } from '../types/Review'
import { getReviews } from '../api/getReviews'
import { useQuery } from 'react-query'

export const useReviewsList = (reviews: ReviewType[]) => {
  return useQuery<ReviewType[], Error>(['reviews'], {
    queryFn: () => getReviews(),
    initialData: reviews ? undefined : reviews,
  })
}

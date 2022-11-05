import { ProductDataType } from 'GlobalTypes/GlobalTypes.model'
import { getProduct } from '../api/getProduct'
import { useQuery } from 'react-query'

export const useProduct = (
  productID: string | string[],
  product?: ProductDataType
) => {
  return useQuery<ProductDataType, Error>(['product', productID], getProduct, {
    initialData: !product ? undefined : product,
  })
}

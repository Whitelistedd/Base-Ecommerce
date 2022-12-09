import { ProductDataType } from 'types/GlobalTypes.model'
import { getProduct } from '../api/getProduct'
import { useQuery } from '@tanstack/react-query'

export const useProduct = (
	productID: string | string[],
	product?: ProductDataType
) => {
	return useQuery<ProductDataType, Error>(['product', productID], getProduct, {
		initialData: product ? product : undefined,
	})
}

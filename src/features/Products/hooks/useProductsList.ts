import { filtersType } from '@/types/GlobalTypes.model'
import { getAllProducts } from '../api/getProductsList'
import { getProductsListResult } from '../types/getProductsList'
import { useQuery } from '@tanstack/react-query'

export const useProductsList = (
	products: getProductsListResult,
	page: number,
	filters: filtersType
) => {
	return useQuery<getProductsListResult, Error>(['products', page, filters], {
		queryFn: () => getAllProducts(page, filters),
		initialData: products ? products : undefined,
	})
}

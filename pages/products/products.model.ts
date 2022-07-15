import { ProductDataType } from '../../src/components/GlobalTypes.model'

export interface ProductsListPageProps {
  products: ProductDataType[]
}

export type filtersState = {
  color: string
  size: string
  gender: string
  categories: string
}

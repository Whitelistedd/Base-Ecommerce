import { ProductDataType } from '../GlobalTypes.model'

export type filtersType = {
  [key: string]: string
}

type handleFilterChangeType = (
  event: React.ChangeEvent<HTMLInputElement>
) => void

export interface ProductsFilterButtonProps {
  inputValue: string
  title: string
  inputName: string
  handleFilterChange: handleFilterChangeType
  filters: filtersType
}

export interface FiltersProps {
  filters: filtersType
  handleFilterChange: handleFilterChangeType
  handleClear: () => void
}

export interface ProductsProps {
  className?: string
  filters?: filtersType
  category?: string
  products?: Array<ProductDataType>
}

export type itemFilterType = {
  [key: string]: string
}

export interface ProductProps {
  item: ProductDataType
}

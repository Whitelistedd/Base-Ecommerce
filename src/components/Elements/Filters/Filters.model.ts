import { filtersType } from 'types/GlobalTypes.model'

export type handleFilterChangeType = (name: string, value: string) => void

export type handleClearType = (name?: string) => void
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
  handleClear: handleClearType
}

export type MobileFilterProps = FiltersProps

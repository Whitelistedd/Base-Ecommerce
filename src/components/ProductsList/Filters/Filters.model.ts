import { filtersType } from '../ProductsList.model'

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

export type MobileFilterProps = FiltersProps

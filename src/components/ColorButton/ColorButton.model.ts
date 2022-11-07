import { filtersType } from 'types/GlobalTypes.model'
import { handleFilterChangeType } from 'components/Filters/Filters.model'

export interface ColorButtonProps {
  colorName: string
  HexColor: string
  handleFilterChange: handleFilterChangeType
  className?: string
  filters?: filtersType
}

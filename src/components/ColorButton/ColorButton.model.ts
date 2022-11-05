import { filtersType } from 'GlobalTypes/GlobalTypes.model'

export interface ColorButtonProps {
  colorName: string
  HexColor: string
  handleFilterChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  className?: string
  filters?: filtersType
}

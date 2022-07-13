import { handleProductTypeType } from '../SingleProduct.model'
import { AllColors, AllSizes } from '../../GlobalTypes.model'

export interface FiltersProps {
  AvailableColors: Array<AllColors>
  AvailableSizes: Array<AllSizes>
  SelectedColor: string
  SelectedSize: string
  handleProductType: (event: handleProductTypeType) => void
}

export interface SizeButtonProps {
  handleProductType: (event: handleProductTypeType) => void
  value: string
  title: string
}

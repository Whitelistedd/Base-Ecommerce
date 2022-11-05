import { AllColors, AllSizes } from 'GlobalTypes/GlobalTypes.model'

import { handleProductTypeType } from './SingleProduct.model'

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

import { AllColors, AllSizes } from 'types/GlobalTypes.model'

import { handleProductTypeType } from './SingleProduct.model'

export interface FiltersProps {
  AvailableColors: Array<AllColors>
  AvailableSizes: Array<AllSizes>
  SelectedColor: string
  SelectedSize: string
  handleProductType: handleProductTypeType
}

export interface SizeButtonProps {
  handleProductType: handleProductTypeType
  value: string
  title: string
}

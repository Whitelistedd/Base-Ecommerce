import {
  Filter,
  FilterContainer,
  FilterTitle,
  SelectedFilter,
  StyledColorRadioButton,
} from 'features/SingleProduct/assets/Filters/Filters-styles'

import { ColorRadioButton } from 'components/Elements/ColorButton/ColorButton'
import { FiltersProps } from '../../types/Filters.model'
import React from 'react'
import { SizeButton } from './SizeButton'
import styled from '@emotion/styled'

export const SingleProductFilters: React.FC<FiltersProps> = ({
  AvailableColors,
  AvailableSizes,
  SelectedColor,
  SelectedSize,
  handleProductType,
}) => {
  return (
    <>
      <FilterContainer>
        <FilterTitle>Size :</FilterTitle>
        <Filter>
          {/* покажет все доступные размеры товара */}
          {AvailableSizes?.map((size) => (
            <SizeButton
              key={size.id}
              handleProductType={handleProductType}
              value={size.title}
              title={size.title}
            />
          ))}
        </Filter>
      </FilterContainer>
      <FilterContainer>
        <FilterTitle>
          Colors : <SelectedFilter>{SelectedColor}</SelectedFilter>{' '}
        </FilterTitle>
        <Filter>
          {/* покажет все доступные цвета товара */}
          {AvailableColors?.map((color) => (
            <StyledColorRadioButton
              key={color.id}
              colorName={color.colorName}
              HexColor={color.HexColor}
              handleFilterChange={handleProductType}
            />
          ))}
        </Filter>
      </FilterContainer>
    </>
  )
}

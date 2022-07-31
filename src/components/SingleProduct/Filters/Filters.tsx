import React from 'react'
import styled from 'styled-components'

import { ColorRadioButton } from '../../ColorButton/ColorButton'
import { FiltersProps } from './Filters.model'
import { SizeButton } from './SizeButton'

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
        <FilterTitle>Размер :</FilterTitle>
        <Filter>
          {/* покажет все доступные размеры товара */}
          {AvailableSizes?.map((size) => (
            <SizeButton
              key={size.id}
              handleProductType={handleProductType}
              value={size.SizeName}
              title={size.title}
            />
          ))}
        </Filter>
      </FilterContainer>
      <FilterContainer>
        <FilterTitle>
          Цвета : <SelectedFilter>{SelectedColor}</SelectedFilter>{' '}
        </FilterTitle>
        <Filter>
          {/* покажет все доступные цвета товара */}
          {AvailableColors?.map((color) => (
            <StyledColorRadioButton
              key={color.id}
              colorName={color.RussianName}
              HexColor={color.HexColor}
              handleFilterChange={handleProductType}
            />
          ))}
        </Filter>
      </FilterContainer>
    </>
  )
}

const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -5px;
  margin-bottom: -25px;
`

const Filter = styled.div`
  display: flex;
`

const SelectedFilter = styled.span`
  font-weight: 400;
  font-size: 14px;
`

const FilterTitle = styled.h4`
  font-weight: 700;
  margin-top: 0;
  margin-bottom: 8px;
`

const StyledColorRadioButton = styled(ColorRadioButton)`
  width: 53px;
  span {
    margin: 10px;
    max-width: 40px;
    max-height: 40px;
  }
`

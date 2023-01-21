import {
  AllCategories,
  AllColors,
  AllGenders,
  AllSizes,
} from '@/data/FiltersData'

import { Chip } from '@mui/material'
import { ColorRadioButton } from '@/components/Elements/ColorButton'
import { FiltersProps } from './Filters.model'
import { ProductsFilterButton } from './FilterButton'
import React from 'react'
import styled from 'styled-components'

export const Filters: React.FC<FiltersProps> = ({
  filters,
  handleFilterChange,
  handleClear,
}) => {
  return (
    <FilterWrap>
      <FilterTitleWrap>
        <FilterTitle>Filters</FilterTitle>
        {/* по клику очистит все фильтры */}
        <Chip
          tabIndex={16}
          onClick={() => handleClear()}
          sx={{
            MaxWidth: 50,
            height: 18,
            fontSize: 10,
            '&:hover': { cursor: 'pointer' },
          }}
          label="Clear All"
          variant="outlined"
        />
      </FilterTitleWrap>
      <FilterTitleWrap>
        <FilterTitle>Colors :</FilterTitle>
        <Chip
          tabIndex={17}
          onClick={() => handleClear('color')}
          sx={{
            MaxWidth: 50,
            height: 18,
            fontSize: 10,
            '&:hover': { cursor: 'pointer' },
          }}
          label="Clear"
          variant="outlined"
        />
      </FilterTitleWrap>
      <Filter>
        {AllColors.map((color) => (
          <ColorRadioButton
            key={color.id}
            colorName={color.colorName}
            HexColor={color.HexColor}
            filters={filters}
            handleFilterChange={handleFilterChange}
          />
        ))}
      </Filter>
      <FilterTitleWrap>
        <FilterTitle>Size :</FilterTitle>
        <Chip
          tabIndex={18}
          onClick={() => handleClear('size')}
          sx={{
            MaxWidth: 50,
            height: 18,
            fontSize: 10,
            '&:hover': { cursor: 'pointer' },
          }}
          label="Clear"
          variant="outlined"
        />
      </FilterTitleWrap>
      <Filter>
        {AllSizes.map((size) => (
          <ProductsFilterButton
            key={size.id}
            title={size.title}
            inputValue={size.title}
            inputName={'size'}
            filters={filters}
            handleFilterChange={handleFilterChange}
          />
        ))}
      </Filter>
      <FilterTitleWrap>
        <FilterTitle>Gender :</FilterTitle>
        <Chip
          tabIndex={19}
          onClick={() => handleClear('gender')}
          sx={{
            MaxWidth: 50,
            height: 18,
            fontSize: 10,
            '&:hover': { cursor: 'pointer' },
          }}
          label="Clear"
          variant="outlined"
        />
      </FilterTitleWrap>
      <Filter>
        {AllGenders.map((gender) => (
          <ProductsFilterButton
            key={gender.id}
            title={gender.title}
            inputValue={gender.title}
            inputName={'gender'}
            filters={filters}
            handleFilterChange={handleFilterChange}
          />
        ))}
      </Filter>
      <FilterTitleWrap>
        <FilterTitle>Categories :</FilterTitle>
        <Chip
          tabIndex={20}
          onClick={() => handleClear('categories')}
          sx={{
            MaxWidth: 50,
            height: 18,
            fontSize: 10,
            '&:hover': { cursor: 'pointer' },
          }}
          label="Clear"
          variant="outlined"
        />
      </FilterTitleWrap>
      <Filter>
        {AllCategories.map((gender) => (
          <ProductsFilterButton
            key={gender.id}
            title={gender.title}
            inputValue={gender.title}
            inputName={'categories'}
            filters={filters}
            handleFilterChange={handleFilterChange}
          />
        ))}
      </Filter>
    </FilterWrap>
  )
}

const FilterTitleWrap = styled.div`
  display: flex;
  gap: 10px;
  align-items: flex-start;
  justify-content: space-between;
`

const FilterWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  gap: 1em;
  margin: 1em;

  ${FilterTitleWrap}:not(:first-child) {
    border-bottom: 1px grey solid;
  }
`

const Filter = styled.div`
  display: flex;
  min-width: 100%;
  width: 210px;
  flex-wrap: wrap;
  gap: 0.5em;
  margin-bottom: 20px;
`

const FilterTitle = styled.h4`
  font-weight: 700;
  margin: 0px 0px 10px 0px;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
`

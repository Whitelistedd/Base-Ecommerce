import { filtersType } from '@/types/GlobalTypes.model'
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import styled from 'styled-components'

import { ProductsFilterButtonProps } from './Filters.model'

export const ProductsFilterButton: React.FC<ProductsFilterButtonProps> = ({
  inputValue,
  title,
  inputName,
  handleFilterChange,
  filters,
}) => {
  const [sizeName, setSizeName] = useState(title)

  const handleChange = () => {
    console.log(sizeName)
  }

  return (
    <SizeRadioLabel>
      <StyledInput
        id={inputValue}
        value={inputValue}
        onChange={() => handleFilterChange(inputValue, inputName)}
        type="radio"
        checked={filters[inputName as keyof filtersType] === inputValue}
      />
      <SizeButton
        tabIndex={21}
        onKeyDown={(e) =>
          e.key === 'Enter' && handleFilterChange(inputValue, inputName)
        }
        htmlFor={inputValue}
      >
        <OptionSelect>
          <StyledH3>
            {title?.charAt(0).toUpperCase()}
            {title.slice(1)}
          </StyledH3>
        </OptionSelect>
      </SizeButton>
    </SizeRadioLabel>
  )
}

const OptionSelect = styled.div``

const StyledInput = styled.input``

const StyledH3 = styled.h3`
  padding: 0em 0.3em;
  margin: 0px;
`

const SizeButton = styled.label`
  margin-top: 5px;
  min-width: 50px;
  min-height: 35px;
  border: 1px solid rgb(0, 165, 253);
  box-shadow: 0 1px #6e6e6e80;
  border-radius: 5px;
  display: inline-block;
  position: relative;
  text-align: center;
  cursor: pointer;
  color: black;
  ${OptionSelect} {
    min-width: 50px;
    min-height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 100;
    font-size: 13px;
  }

  &:hover {
    background-color: rgb(0, 165, 253);
    color: white;
  }
`

const SizeRadioLabel = styled.label`
  min-width: 53px;

  input {
    display: none;
  }

  ${StyledInput}:checked ~ ${StyledH3} {
    font-weight: 900;
  }

  ${StyledInput}:checked + ${SizeButton} {
    background-color: rgb(0, 165, 253);
    color: white;
  }
`

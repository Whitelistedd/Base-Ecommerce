import React from "react";
import styled from "styled-components";

import { ColorRadioButton } from "../ColorButton";
import { SizeButton } from "./SizeButton";

export const SingleProductFilters = ({
  AvailableColors,
  AvailableSizes,
  SelectedColor,
  SelectedSize,
  handleProductType,
}) => {
  return (
    <>
      <FilterContainer>
        <FilterTitle>Размер : {SelectedSize}</FilterTitle>
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
        <FilterTitle>Цвета : {SelectedColor}</FilterTitle>
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
  );
};

const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -5px;
  margin-bottom: -25px;
`;

const Filter = styled.div`
  display: flex;
`;

const FilterTitle = styled.h4`
  font-weight: 700;
  margin-top: 0;
  margin-bottom: 8px;
`;

const StyledColorRadioButton = styled(ColorRadioButton)`
  width: 53px;
  span {
    margin: 10px;
    max-width: 40px;
    max-height: 40px;
  }
`;

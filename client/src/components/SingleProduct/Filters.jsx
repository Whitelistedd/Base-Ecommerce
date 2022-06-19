import { Typography } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

import { ColorRadioButton } from '../ColorButton';
import { SizeButton } from './SizeButton';

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
          {AvailableSizes?.map((size) => (
            <SizeButton
              key={size.id}
              handleProductType={handleProductType}
              value={size.SizeName}
              title={size.title}
            />
          ))}
          {/* <SizeRadioLabel onChange={() => handleProductType("size", "XS")}>
            <StyledInput type="radio" name="size" />
            <SizeButton>
              <OptionSelect>
                <StyledH3>XS</StyledH3>
              </OptionSelect>
            </SizeButton>
          </SizeRadioLabel>
          <SizeRadioLabel onChange={() => handleProductType("size", "S")}>
            <StyledInput type="radio" name="size" />
            <SizeButton>
              <OptionSelect>
                <StyledH3>S</StyledH3>
              </OptionSelect>
            </SizeButton>
          </SizeRadioLabel>
          <SizeRadioLabel onChange={() => handleProductType("size", "M")}>
            <StyledInput type="radio" name="size" />
            <SizeButton>
              <OptionSelect>
                <StyledH3>M</StyledH3>
              </OptionSelect>
            </SizeButton>
          </SizeRadioLabel>
          <SizeRadioLabel onChange={() => handleProductType("size", "L")}>
            <StyledInput type="radio" name="size" />
            <SizeButton>
              <OptionSelect>
                <StyledH3>L</StyledH3>
              </OptionSelect>
            </SizeButton>
          </SizeRadioLabel>
          <SizeRadioLabel onChange={() => handleProductType("size", "XL")}>
            <StyledInput type="radio" name="size" />
            <SizeButton>
              <OptionSelect>
                <StyledH3>XL</StyledH3>
              </OptionSelect>
            </SizeButton>
          </SizeRadioLabel>
          <SizeRadioLabel onChange={() => handleProductType("size", "XXL")}>
            <StyledInput type="radio" name="size" />
            <SizeButton>
              <OptionSelect>
                <StyledH3>XXL</StyledH3>
              </OptionSelect>
            </SizeButton>
          </SizeRadioLabel> */}
        </Filter>
      </FilterContainer>
      <FilterContainer>
        <FilterTitle>
          Цвета :{" "}
          <Typography variant="span" sx={{ fontWeight: 500 }}>
            {SelectedColor}
          </Typography>
        </FilterTitle>
        <Filter>
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

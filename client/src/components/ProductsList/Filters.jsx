import { Chip } from "@mui/material";
import React from "react";
import styled from "styled-components";

import { AllCategories, AllColors, AllGenders, AllSizes } from "../../data";
import { ColorRadioButton } from "../ColorButton";
import { ProductsFilterButton } from "./FilterButton";

export const Filters = ({ filters, handleFilterChange, handleClear }) => {
  return (
    <FilterWrap>
      <FilterTitleWrap>
        <FilterTitle>Фильтры</FilterTitle>
        {/* по клику очистит все фильтры */}
        <Chip
          onClick={handleClear}
          sx={{
            MaxWidth: 50,
            height: 18,
            fontSize: 10,
            "&:hover": { cursor: "pointer" },
          }}
          label="Очистить"
          variant="outlined"
        />
      </FilterTitleWrap>
      <FilterTitleWrap>
        <FilterTitle>Цвета :</FilterTitle>
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
      </FilterTitleWrap>
      <Filter>
        {AllSizes.map((size) => (
          <ProductsFilterButton
            key={size.id}
            title={size.title}
            inputValue={size.SizeName}
            inputName={"size"}
            filters={filters}
            handleFilterChange={handleFilterChange}
          />
        ))}
      </Filter>
      <FilterTitleWrap>
        <FilterTitle>Пол :</FilterTitle>
      </FilterTitleWrap>
      <Filter>
        {AllGenders.map((gender) => (
          <ProductsFilterButton
            key={gender.id}
            title={gender.title}
            inputValue={gender.GenderName}
            inputName={"gender"}
            filters={filters}
            handleFilterChange={handleFilterChange}
          />
        ))}
      </Filter>
      <FilterTitleWrap>
        <FilterTitle>Категории :</FilterTitle>
      </FilterTitleWrap>
      <Filter>
        {AllCategories.map((gender) => (
          <ProductsFilterButton
            key={gender.id}
            title={gender.title}
            inputValue={gender.CategoryName}
            inputName={"categories"}
            filters={filters}
            handleFilterChange={handleFilterChange}
          />
        ))}
      </Filter>
    </FilterWrap>
  );
};

const FilterTitleWrap = styled.div`
  display: flex;
  gap: 10px;
  align-items: flex-start;
  justify-content: space-between;
`;

const FilterWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  gap: 1em;
  margin: 1em;

  ${FilterTitleWrap}:not(:first-child) {
    border-bottom: 1px grey solid;
  }
`;

const Filter = styled.div`
  display: flex;
  min-width: 100%;
  width: 200px;
  flex-wrap: wrap;
  gap: 0.5em;
  margin-bottom: 20px;
`;

const FilterTitle = styled.h4`
  font-weight: 700;
  margin: 0px 0px 10px 0px;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
`;

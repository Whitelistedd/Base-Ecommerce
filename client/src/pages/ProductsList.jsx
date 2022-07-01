import "aos/dist/aos.css";

import { Close } from "@mui/icons-material";
import { Drawer, List } from "@mui/material";
import AOS from "aos";
import React, { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

import { Filters } from "../components/ProductsList/Filters";
import { Products } from "../components/ProductsList/Products";
import { devices } from "../data";
import { Layout } from "../components/Layout/Layout";

export const ProductsList = () => {
  const location = useLocation();
  const categoryType = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({
    color: "",
    size: "",
    gender: "",
    categories: "",
  });

  const [open, setOpen] = useState(false);

  /* обрабатывать фильтры для страницы продуктов */
  const handleFilterChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  /* функция очистки всех фильтров */
  const handleClear = () => {
    setFilters({
      color: "",
      size: "",
      gender: "",
      categories: "",
    });
  };

  /* функция переключения мобильного меню */
  const toggleDrawer = () => {
    setOpen(open ? false : true);
  };

  /* изменить фильтр, если URL-адрес имеет категории */
  useEffect(() => {
    AOS.init();
    AOS.refresh();
    if (categoryType === "men") {
      setFilters((prev) => ({ ...prev, gender: "men" }));
    } else if (categoryType === "women") {
      setFilters((prev) => ({ ...prev, gender: "women" }));
    }
  }, [categoryType]);

  return (
    <Layout>
      <Container>
        <ProductsWrap
          data-aos="fade-up"
          data-aos-offset="0"
          data-aos-delay="0"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="false"
          data-aos-once="true"
        >
          <MobileFilter>
            <MobileButton onClick={toggleDrawer}>FILTER</MobileButton>
            <Drawer
              onClose={toggleDrawer}
              open={open}
              sx={{ width: "80%", ".MuiDrawer-paper": { width: "80%" } }}
              variant="temporary"
              anchor="right"
            >
              <List sx={{ ml: 3, mt: 1.5, mr: 3 }}>
                <Close onClick={toggleDrawer} sx={{ cursor: "pointer" }} />
                <FilterContainerMobile>
                  <Filters
                    handleFilterChange={handleFilterChange}
                    handleClear={handleClear}
                    filters={filters}
                  />
                </FilterContainerMobile>
              </List>
            </Drawer>
          </MobileFilter>
          <FilterContainer>
            <Filters
              handleFilterChange={handleFilterChange}
              handleClear={handleClear}
              filters={filters}
            />
          </FilterContainer>
          <ProductsContainer>
            <StyledProducts cat={categoryType} filters={filters} />
          </ProductsContainer>
        </ProductsWrap>
      </Container>
    </Layout>
  );
};

const ProductsWrap = styled.div`
  display: flex;
  width: 100%;
  margin-top: 100px;
  align-items: flex-start;
`;

const ProductsContainer = styled.div`
  flex: 5.5;
`;

const StyledProducts = styled(Products)`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(auto-fit, 1fr);
  .Image {
    min-width: 130px;
    width: 100%;
  }
`;

const FilterContainer = styled.div`
  display: flex;
  flex: 1;
  padding: 25px 0px;
  justify-content: center;
`;

const FilterContainerMobile = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  margin-right: 0px;
  padding: 1em 0em;
  justify-content: center;
`;

const MobileFilter = styled.div`
  display: none;
  align-content: center;
  justify-content: center;
  width: 100%;
`;

const MobileButton = styled.button`
  outline: none;
  border: none;
  padding: 1em 0em;
  width: 100%;
  font-size: 20px;
  border: 1px solid #efefef;
  background: none;
`;

const Container = styled.div`
  min-height: 100vh;
  @media only screen and (max-width: ${devices.Desktop}px) {
    ${StyledProducts} {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  @media only screen and (max-width: 1200px) {
    ${StyledProducts} {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media only screen and (max-width: ${devices.Tablet}px) {
    ${MobileFilter} {
      display: flex;
    }
    ${FilterContainerMobile} {
      display: flex;
    }
    ${FilterContainer} {
      display: none;
    }
    ${StyledProducts} {
      display: grid;
      grid-template-columns: repeat(auto-fit, 1fr);
    }
    ${ProductsWrap} {
      flex-direction: column;
    }
  }
  @media only screen and (max-width: ${devices.Phone}px) {
    ${StyledProducts} {
      display: grid;
      grid-template-columns: 1fr;
    }
  }
`;

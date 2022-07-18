import "aos/dist/aos.css";

import AOS from "aos";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Layout } from "../components/Layout/Layout";
import styled from "styled-components";
import { Products } from "../components/ProductsList/Products";
import { devices } from "../data";
import { Header } from "../components/Header/Header";

export const HomePage = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <Layout>
      <Header />
      <Container
        data-aos="fade-up"
        data-aos-offset="0"
        data-aos-delay="0"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="false"
        data-aos-once="true"
      >
        <HomeProducts />
        <Link to={"/products/all"}>
          <HeaderButton>Посмотреть продукты</HeaderButton>
        </Link>
      </Container>
    </Layout>
  );
};

const HeaderButton = styled.button`
  font-family: "Montserra", sans-serif;
  background-color: transparent;
  border: 0px;
  color: white;
  background-color: #282828;
  font-weight: 700;
  letter-spacing: 2px;
  font-size: 1em;
  padding: 0.8em;
  transition: 400ms;
  z-index: 2;
  cursor: pointer;
  &:hover {
    background-color: #1d1c1c;
  }
`;

const HomeProducts = styled(Products)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
  height: 100%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (max-width: ${devices.Laptop}px) {
  }

  @media only screen and (max-width: ${devices.Phone}px) {
    ${HeaderButton} {
      flex-direction: column;
      justify-content: center;
    }
  }
`;

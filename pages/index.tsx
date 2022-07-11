import "aos/dist/aos.css";

import AOS from "aos";
import { useEffect } from "react";
import Link from "next/link";
import { Layout } from "../src/components/Layout/Layout";
import styled from "styled-components";
import { Products } from "../src/components/ProductsList/Products";
import { devices } from "../src/data";
import { Parallax } from "react-parallax";

const HomePage = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <StyledParallax bgImage={"../src/images/background.webp"} strength={400}>
        <HeaderWrap>
          <Link href={"/products/men"}>
            <HeaderButton>Мужчины</HeaderButton>
          </Link>
          <Link href={"/products/women"}>
            <HeaderButton>Женщины</HeaderButton>
          </Link>
        </HeaderWrap>
      </StyledParallax>
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
        <Link href={"/products/all"}>
          <HeaderButton>Посмотреть продукты</HeaderButton>
        </Link>
      </Container>
    </>
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
  font-size: 1.5rem;
  padding: 0.8em;
  transition: 400ms;
  z-index: 2;
  cursor: pointer;
  &:hover {
    background-color: #1d1c1c;
  }
`;

const HeaderWrap = styled.div`
  width: 100%;
  height: 800px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1em;
  flex-wrap: wrap;
`;

const HomeProducts = styled(Products)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
  height: 100%;
`;

const StyledParallax = styled(Parallax)`
  height: 800px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (max-width: ${devices.Laptop}px) {
    ${HeaderButton} {
      font-size: 1.2em;
    }
  }

  @media only screen and (max-width: ${devices.Phone}px) {
    ${HeaderButton} {
      font-size: 1em;
      flex-direction: column;
      justify-content: center;
    }
  }
`;

export default HomePage
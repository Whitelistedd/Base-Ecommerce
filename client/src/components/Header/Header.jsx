import { useEffect, useState } from "react";
import { Parallax } from "react-parallax";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { devices } from "../../data";

import backgroundImage from "../../images/background.webp";

export const Header = () => {
  const [mobile, setMobile] = useState(false);

  const handleResize = () => {
    setMobile(window.innerWidth < 500);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {!mobile ? (
        <StyledParallax bgImage={backgroundImage} strength={400}>
          <HeaderWrap>
            <StyledLink to={"/products/men"}>
              <HeaderButton>Мужчины</HeaderButton>
            </StyledLink>
            <StyledLink to={"/products/women"}>
              <HeaderButton>Женщины</HeaderButton>
            </StyledLink>
          </HeaderWrap>
        </StyledParallax>
      ) : (
        <HeaderWrap mobile={mobile}>
          <StyledLink to={"/products/men"}>
            <HeaderButton>Мужчины</HeaderButton>
          </StyledLink>
          <StyledLink to={"/products/women"}>
            <HeaderButton>Женщины</HeaderButton>
          </StyledLink>
        </HeaderWrap>
      )}
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
  font-size: 1em;
  padding: 0.8em;
  transition: 400ms;
  z-index: 2;
  cursor: pointer;
  &:hover {
    background-color: #1d1c1c;
  }
`;

const StyledParallax = styled(Parallax)`
  height: 800px;
`;

const StyledLink = styled(Link)``;

const HeaderWrap = styled.div`
  width: 100%;
  height: 800px;
  background: ${({ mobile }) => mobile && `url(${backgroundImage})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1em;
  font-size: 25px;
  flex-wrap: wrap;

  @media only screen and (max-width: ${devices.Laptop}px) {
    font-size: 20px;
  }

  @media only screen and (max-width: ${devices.Phone}px) {
    font-size: 15px;
    height: 600px;
  }
`;

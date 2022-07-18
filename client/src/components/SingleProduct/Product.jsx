import React from "react";
import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

import { Failed } from "../../pages/Failed";
import { devices } from "../../data";
import { Loading } from "../../pages/Loading";
import { getProduct } from "../../redux/apiCalls";
import { ImageSwipe } from "./Images/ImageSwipe";
import { ProductForm } from "./ProductForm";
import { ProductImages } from "./Images/ProductImages";

export const Product = () => {
  const location = useLocation();
  const productID = location.pathname.split("/")[2];

  /* функция, чтобы получить выбранный продукт и получить все доступные размеры и цвета */

  const { data, status } = useQuery(["singleProduct", productID], getProduct);

  if (status === "loading") {
    return <Loading />;
  }

  if (status === "error") {
    return <Failed />;
  }

  return (
    <Container>
      <ProductsWrap>
        <ImageSwipe productInfo={data} />
        <ProductImages productInfo={data} />
        <ProductForm productInfo={data} />
      </ProductsWrap>
    </Container>
  );
};

const Fontcolor = "#9d9d9d";

const ProductsWrap = styled.div`
  display: flex;
  gap: 10em;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 90vh;
  margin-bottom: 9em;
  align-items: center;
  color: ${Fontcolor};
  @media only screen and (max-width: ${devices.Desktop}px) {
    ${ProductsWrap} {
      gap: 0em;
    }
  }
  @media only screen and (max-width: ${devices.Tablet}px) {
    ${ProductsWrap} {
      flex-direction: column;
      width: 100vw;
      align-items: center;
      min-height: 100vh;
    }
    min-height: 100vh;
    margin-bottom: 0px;
  }
`;

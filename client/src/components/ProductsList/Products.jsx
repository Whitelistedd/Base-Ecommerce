import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { Loading } from "../../pages/Loading";
import { BASE_URL } from "../../requests";
import { Product } from "./Product";

export const Products = ({ className, setCart, filters, cat, gender }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [LoadingStatus, setLoadingStatus] = useState();

  useEffect(() => {
    const getProducts = async () => {
      setLoadingStatus(true);
      try {
        const res = await axios.get(
          cat ? `${BASE_URL}products?category=` : `${BASE_URL}products`
        );
        setProducts(res.data);
        setLoadingStatus(false);
      } catch (err) {}
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    try {
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            value !== "" ? item[key].includes(value) : item[key].includes
          )
        )
      );
    } catch (err) {}
  }, [products, cat, filters, gender]);

  if (LoadingStatus) {
    return <ProductsLoading />;
  }

  return (
    <Container className={className}>
      {cat
        ? filteredProducts.map((item) => (
            <Product cart={setCart} item={item} key={item._id} />
          ))
        : products
            ?.slice(0, 4)
            .map((item) => (
              <Product cart={setCart} item={item} key={item._id} />
            ))}
    </Container>
  );
};

const ProductsLoading = styled(Loading)`
  width: 100%;
`;

const Container = styled.div`
  padding: 20px;
  width: 100%;
  grid-gap: 2em;
  grid-template-rows: repeat(auto, auto);
`;

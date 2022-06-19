import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { Loading } from '../../pages/Loading';
import { BASE_URL } from '../../requests';
import { Product } from './Product';

/* import { Link } from 'react-router-dom' */
export const Products = ({ className, setCart, filters, cat, gender }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [LoadingStatus, setLoadingStatus] = useState();

  useEffect(() => {
    const getProducts = async () => {
      setLoadingStatus(true);
      try {
        const res = await axios.get(
          cat
            ? `${BASE_URL}products?category=${cat === "all" ? "" : cat}`
            : `${BASE_URL}products`
        );
        setProducts(res.data);
        setLoadingStatus(false);
      } catch (err) {
        console.log(err);
      }
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    try {
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
    } catch (err) {}
  }, [products, cat, filters, gender]);

  if (LoadingStatus) {
    return <ProductsLoading />;
  }

  console.log(products?.slice(0, 4));

  return (
    <Container className={className}>
      {cat
        ? filteredProducts.map((item) => (
            <Product cart={setCart} item={item} key={item._id} />
          ))
        : products?.map((item) => (
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

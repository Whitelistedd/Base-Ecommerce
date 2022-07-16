import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import { Failed } from "../../pages/Failed";
import { Loading } from "../../pages/Loading";
import { publicRequest } from "../../requests";
import { Product } from "./Product";

export const Products = ({ className, setCart, filters, category, gender }) => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  /* useEffect для получения всех продуктов */

  const getProducts = async ({ queryKey }) => {
    const Category = queryKey[1];
    const response = await publicRequest.get(
      Category ? `products?category=` : `products`
    );
    return response;
  };

  const { data, status } = useQuery(["products", category], getProducts);

  console.log(data);

  /* useEffect для фильтрации продуктов */
  useEffect(() => {
    try {
      setFilteredProducts(
        data.data.filter((item) =>
          /* если фильтр соответствует категории в объекте продукта, будет показан продукт */
          Object.entries(filters).every(([key, value]) =>
            value !== "" ? item[key].includes(value) : item[key].includes
          )
        )
      );
    } catch (err) {}
  }, [data, category, filters, gender]);

  /* если продукты все еще загружаются, тогда он покажет этот компонент загрузки */
  if (status === "loading") {
    return <ProductsLoading />;
  }

  if (status === "error") {
    return <Failed />;
  }

  return (
    <Container className={className}>
      {/* если страница не является домашней страницей, будут показаны все продукты, если это домашняя страница, будут показаны только первые 4 */}
      {category
        ? filteredProducts.map((item) => (
            <Product cart={setCart} item={item} key={item._id} />
          ))
        : data.data
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

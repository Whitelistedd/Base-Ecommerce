import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import { GetServerSideProps } from 'next'

import { Failed } from "../Failed/Failed";
import { Loading } from "../Loading/Loading";
import { publicRequest } from "../../requests";
import { Product } from "./Product";
import { itemFilterType, ProductsProps } from "./ProductsList.model";
import { ProductDataType, queryKeyType } from "../GlobalTypes.model";
import { useRouter } from "next/router";
import { getProducts } from "../../apiCalls/apiCalls";

export const Products : React.FC<ProductsProps> = ({ className, filters, category,products }) => {
  const [filteredProducts, setFilteredProducts] = useState([]);

  const { data, status } = useQuery(["products"], getProducts, { initialData: products });

  /* useEffect для фильтрации продуктов */
  useEffect(() => {
    try {
      data &&
      setFilteredProducts(
        data.data.filter((item: itemFilterType) =>
          /* если фильтр соответствует категории в объекте продукта, будет показан продукт */
          Object.entries(filters).every(([key, value]) =>
            value !== "" ? item[key].includes(value) : item[key].includes
          )
        )
      );
    } catch (err) {}
  }, [data, category, filters]);

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
        ? filteredProducts.map((item : ProductDataType) => (
            <Product item={item} key={item._id} />
          ))
        : data && data.data
            ?.slice(0, 4)
            .map((item : ProductDataType) => (
              <Product item={item} key={item._id} />
            ))}
    </Container>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {

  const router = useRouter()

  return "w"
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

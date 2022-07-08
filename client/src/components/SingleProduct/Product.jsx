import React, { useState } from "react";
import { useQuery } from "react-query";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { Failed } from "../../pages/Failed";
import { AllColors, AllSizes, devices } from "../../data";
import { Loading } from "../../pages/Loading";
import { addProduct } from "../../redux/cartRedux";
import { publicRequest } from "../../requests";
import { ImageSwipe } from "./ImageSwipe";
import { ProductForm } from "./ProductForm";
import { ProductImages } from "./ProductImages";

export const Product = () => {
  const location = useLocation();
  const productID = location.pathname.split("/")[2];
  const [productType, setProductType] = useState({});
  const [displayError, SetDisplayError] = useState(false);
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  /* функция, чтобы получить выбранный продукт и получить все доступные размеры и цвета */
  const getProduct = async ({ queryKey }) => {
    const Id = queryKey[1];
    const res = await publicRequest.get("/products/find/" + Id);

    const getAvailableColors = await AllColors.filter((color) =>
      res.data.color.includes(color.colorName)
    );
    const getAvailableSizes = await AllSizes.filter((size) =>
      res.data.size.includes(size.SizeName)
    );

    return { ...res.data, size: getAvailableSizes, color: getAvailableColors };
  };

  const { data, status } = useQuery(["singleProduct", productID], getProduct);

  /* функция добавления фильтров по клику пользователя */
  const handleProductType = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setProductType((prev) => ({ ...prev, [name]: value }));
  };

  /* функция изменения количества продукта */
  const handleQuantity = (type) => {
    setQuantity((prev) => {
      return type === "add" ? prev + 1 : prev > 1 ? prev - 1 : prev;
    });
  };

  /* если пользователь выбрал товар с цветом и размером, он будет добавлен в корзину */
  const handleCart = () => {
    if (!productType.color || !productType.size) {
      SetDisplayError(true);
    } else {
      dispatch(
        addProduct({
          _id: data._id,
          price: data.price,
          quantity,
          ...productType,
        })
      );
    }
  };

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
        <ProductForm
          handleCart={handleCart}
          handleProductType={handleProductType}
          quantity={quantity}
          handleQuantity={handleQuantity}
          error={displayError}
          productType={productType}
          productInfo={data}
        />
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

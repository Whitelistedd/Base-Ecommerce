import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

import { AllColors, AllSizes, devices } from "../../data";
import { addProduct } from "../../redux/cartRedux";
import { publicRequest } from "../../requests";
import { ImageSwipe } from "./ImageSwipe";
import { ProductForm } from "./ProductForm";
import { ProductImages } from "./ProductImages";

export const Product = () => {
  const location = useLocation();
  const productID = location.pathname.split("/")[2];
  const [productInfo, setProductInfo] = useState({});
  const [productType, setProductType] = useState({});
  const [error, SetError] = useState(false);
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  const handleProductType = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setProductType((prev) => ({ ...prev, [name]: value }));
  };

  const handleQuantity = (type) => {
    setQuantity((prev) => {
      return type === "add" ? prev + 1 : prev > 1 ? prev - 1 : prev;
    });
  };

  const handleCart = () => {
    if (productType.color === undefined || productType.size === undefined) {
      SetError(true);
    } else {
      dispatch(
        addProduct({
          _id: productInfo._id,
          price: productInfo.price,
          quantity,
          ...productType,
        })
      );
    }
  };

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + productID);
        const getAvailableColors = await AllColors.filter((color) =>
          res.data.color.includes(color.colorName)
        );
        const getAvailableSizes = await AllSizes.filter((size) =>
          res.data.size.includes(size.SizeName)
        );
        setProductInfo({
          ...res.data,
          size: getAvailableSizes,
          color: getAvailableColors,
        });
      } catch (err) {
        console.log(err);
      }
    };
    getProduct();
  }, [productID]);

  return (
    <Container>
      <ImageSwipe productInfo={productInfo} />
      <ProductImages productInfo={productInfo} />
      <ProductForm
        handleCart={handleCart}
        handleProductType={handleProductType}
        quantity={quantity}
        handleQuantity={handleQuantity}
        error={error}
        productType={productType}
        productInfo={productInfo}
      />
    </Container>
  );
};

const Fontcolor = "#9d9d9d";

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 90vh;
  gap: 10em;
  margin-bottom: 9em;
  align-items: center;
  color: ${Fontcolor};
  @media only screen and (max-width: ${devices.Desktop}px) {
    gap: 0em;
  }
  @media only screen and (max-width: ${devices.Tablet}px) {
    flex-direction: column;
    margin-bottom: 100px;
  }
`;

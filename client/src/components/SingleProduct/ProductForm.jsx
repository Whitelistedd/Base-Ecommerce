import { Alert } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import { devices } from "../../data";
import Undo from "../../images/undo.svg";
import { addProduct } from "../../redux/cartRedux";
import { Benifit } from "./Benifit/Benifit";
import { SingleProductFilters } from "./Filters/Filters";
import { Quantity } from "./Quantity/Quantity";

export const ProductForm = ({ productInfo }) => {
  const [productType, setProductType] = useState({});
  const [displayError, SetDisplayError] = useState(false);
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

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
          _id: productInfo._id,
          price: productInfo.price,
          quantity,
          ...productType,
        })
      );
    }
  };

  return (
    <InfoContainer>
      <Title>{productInfo.title}</Title>
      <Price>₽{productInfo.price}</Price>

      <SingleProductFilters
        SelectedColor={productType.color}
        selectedSize={productType.size}
        AvailableColors={productInfo.color}
        AvailableSizes={productInfo.size}
        handleProductType={handleProductType}
      />
      {/* если цвет или размер не выбраны, будет отображаться ошибка */}
      {displayError && (
        <Alert severity="error">Пожалуйста, выберите нужный цвет/размер.</Alert>
      )}
      <QuantityInfo>
        <Quantity handleQuantity={handleQuantity} quantity={quantity} />
        {/* если товара нет в наличии, пользователь не сможет добавить его в корзину */}
        {productInfo.inStock ? (
          <StyledButton onClick={() => handleCart()}>ADD TO CART</StyledButton>
        ) : (
          <OutOfStockButton>Out Of Stock</OutOfStockButton>
        )}
      </QuantityInfo>
      <BenifitsContainer>
        <Benifit
          icon={Undo}
          title={"Бесплатный возврат всех заказов из России"}
        />
      </BenifitsContainer>
    </InfoContainer>
  );
};

const Font = "Barlow";

const Title = styled.h1`
  font-family: "FuturaLight";
  font-weight: 600;
  letter-spacing: 1px;
  font-size: 1.5em;
  color: black;
  margin-bottom: 0px;
`;

const Price = styled.span`
  font-family: ${Font};
  font-weight: 500;
  font-size: 1.2em;
  margin-top: -45px;
  margin-bottom: 10px;
`;

const BenifitsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

const StyledButton = styled.button`
  padding: 1em;
  font-size: 1em;
  font-weight: 700;
  border: 0px;
  width: 100%;
  background-color: #018748;
  color: white;
  &:hover {
    cursor: pointer;
  }
`;

const OutOfStockButton = styled(StyledButton)`
  background-color: grey;
  &:hover {
    cursor: not-allowed;
  }
`;

const QuantityInfo = styled.div`
  display: flex;
  gap: 10px;
`;

const Amount = styled.span`
  font-size: 1.1em;
`;

const InfoContainer = styled.div`
  display: flex;
  height: 60vh;
  width: 22vw;
  min-width: 400px;
  gap: 3em;
  color: #282828;
  flex-direction: column;
  @media only screen and (max-width: ${devices.Desktop}px) {
    width: 30vw;
    height: 49vh;
    ${Amount} {
      font-size: 1.3em;
    }
  }
  @media only screen and (max-width: ${devices.Tablet}px) {
    width: 70%;
    min-width: 600px;
    flex-direction: column;
    padding: 2em;
    margin-bottom: 100px;
    ${QuantityInfo} {
      flex-direction: column;
    }
    ${BenifitsContainer} {
      margin: 1em 0em;
      align-items: center;
    }
    ${Title} {
      text-align: center;
    }
    ${Price} {
      text-align: center;
    }
  }
  @media only screen and (max-width: ${devices.Tablet}px) {
    font-size: 15px;
    min-width: 350px;
    padding: 2em;
    height: 100%;
    margin-bottom: 0px;
  }
`;

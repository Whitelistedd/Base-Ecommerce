import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

import { devices } from "../data";
import { newCheckout } from "../redux/apiCalls";

export const Form = ({ cart, setShipping }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  let dispatch = useDispatch();

  /* расчет доставки, чтобы показать пользователю сумму */
  const handleShipping = (e) => {
    const value = e.target.value;
    if (value === "PochtaRussia") {
      setShipping(500);
    } else if (value === "Cdek") {
      setShipping(700);
    }
  };

  /* отправит запрос с ключом idemp и получит URL-адрес из бэкэнда, чтобы перенаправить пользователя на страницу покупки */
  const onSubmit = async ({
    address,
    firstName,
    lastName,
    email,
    phoneNumber,
    shippingMethod,
  }) => {
    const products = cart.products;
    const key = uuidv4();
    var res1 = await newCheckout(dispatch, key, {
      products,
      address,
      firstName,
      lastName,
      email,
      phoneNumber,
      shippingMethod,
    });
    res1 !== undefined && (window.location.href = res1);
  };

  return (
    <Information onSubmit={handleSubmit(onSubmit)}>
      <Title>Контакты</Title>
      <Input
        {...register("email", {
          required: "Пожалуйста, введите свой адрес Эл. адрес",
        })}
        type="email"
        placeholder="Эл. адрес"
      />
      <Title>Адреса доставки</Title>
      <GatheredInput>
        <Input
          {...register("firstName", {
            required: "Пожалуйста, введите свое Имя",
          })}
          type="text"
          placeholder="Имя"
        />
        <Input
          {...register("lastName", {
            required: "Пожалуйста, введите свою фамилию",
          })}
          type="text"
          placeholder="Фамилия"
        />
      </GatheredInput>
      <Input
        {...register("address.address", {
          required: "Пожалуйста, введите свой адрес",
        })}
        type="text"
        placeholder="Адрес"
      />
      <Input
        {...register("address.apartment")}
        type="text"
        placeholder="Квартира, люкс и т. д. (по желанию)"
      />
      <Input
        {...register("address.city", {
          required: "Пожалуйста, введите свой город",
        })}
        type="text"
        placeholder="Город"
      />
      <GatheredInput>
        <Input
          {...register("address.country", { required: true })}
          type="text"
          placeholder="Страна/регион"
        />
        <Input
          {...register("address.zipCode", {
            required: "Пожалуйста, введите ваш почтовый индекс",
          })}
          type="text"
          placeholder="почтовый индекс"
        />
      </GatheredInput>
      <InputPhone
        {...register(
          "phoneNumber",
          {
            required: "Пожалуйста введите ваш номер телефона",
            pattern: {
              value: /^((\+7|7|8)+([0-9]){10})$/gm,
              message: "invalid phone number",
            },
          },
          { valueAsNumber: true }
        )}
        type="tel"
        placeholder="Телефон — получайте SMS-поддержку, обновления и предложения от нашей команды "
      />
      <Container>
        <Title>Способ доставки</Title>

        <ShippingForm>
          <ShippingWrap>
            <ShippingMethod>
              <InputRadio
                {...register("shippingMethod", { required: true })}
                value="PochtaRussia"
                id="PochtaRussia"
                type="radio"
                defaultChecked
                onClick={(e) => handleShipping(e)}
              />
              <Label htmlFor="PochtaRussia">Почта россии</Label>
              <Price>₽500</Price>
            </ShippingMethod>
            <ShippingMethod>
              <InputRadio
                {...register("shippingMethod", { required: true })}
                value="Cdek"
                id="Ozon"
                type="radio"
                onClick={(e) => handleShipping(e)}
              />
              <Label htmlFor="Ozon">Cdek</Label>
              <Price>₽700</Price>
            </ShippingMethod>
          </ShippingWrap>
        </ShippingForm>
      </Container>
      {errors && (
        <ErrorMessage>
          {errors.email?.message ||
            errors.lastName?.message ||
            errors.address?.address?.message ||
            errors.address?.city?.message ||
            errors.address?.zipCode?.message ||
            errors.phoneNumber?.message}
        </ErrorMessage>
      )}
      <Button type="submit">Checkout</Button>
    </Information>
  );
};

const Title = styled.h1`
  font-size: 17px;
  font-weight: 500;
`;

const Input = styled.input`
  padding: 1em;
  max-width: 100%;
  border-radius: 5px;
  border: 1px solid #d9d9d9;
  outline: none;
  &:focus {
    border: 2px solid #b69f8d;
  }
`;

const InputPhone = styled(Input)`
  font-size: 12px;
`;

const Button = styled.button`
  align-self: flex-end;
  padding: 1.3em 1em;
  color: white;
  font-size: 14px;
  font-weight: 700;
  border-radius: 5px;
  background: #454545;
  transition: 400ms ease;
  border: none;
  &:hover {
    transition: 400ms ease;
    cursor: pointer;
    background: rgba(0, 0, 0, 0.8);
  }
  min-width: 30%;
`;

const GatheredInput = styled.div`
  width: 100%;
  display: flex;
  gap: 1em;
  justify-content: space-between;
  input {
    width: 100%;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 70%;
  gap: 1em;
`;

const ShippingForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

const ShippingWrap = styled.div`
  border: 1px solid #d9d9d9;
  border-radius: 5px;
`;

const ShippingMethod = styled.div`
  color: rgb(84, 84, 84);
  display: flex;
  padding: 1em;
  gap: 1em;
  border-bottom: 1px solid #d9d9d9;
`;

const InputRadio = styled.input`
  transform: scale(1.5);
  &:checked {
    accent-color: brown;
  }
`;

const Label = styled.label`
  flex: 2;
  &:hover {
    cursor: pointer;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  border-radius: 5px;
  padding: 1em 0em;
  font-size: 17px;
  align-self: flex-end;
`;

const Price = styled.p``;

const Information = styled.form`
  display: flex;
  flex-direction: column;
  width: 70%;
  min-height: 60%;
  gap: 1em;
  @media only screen and (max-width: ${devices.Laptop}px) {
    width: 90%;
  }
  @media only screen and (max-width: ${devices.Tablet}px) {
    width: 80%;
    justify-content: center;
  }
`;

import {
  Button,
  Container,
  ErrorMessage,
  GatheredInput,
  Information,
  Input,
  InputPhone,
  InputRadio,
  Label,
  Price,
  ShippingForm,
  ShippingMethod,
  ShippingWrap,
  Title,
} from '../assets/Form-styles'
import { FormProps, InfoType } from '../types/Checkout.model'
import { SubmitHandler, useForm } from 'react-hook-form'

import { AppDispatch } from 'redux/store/store'
import React from 'react'
import { handleShipping } from '../utils/handleShippingCost'
import { newCheckout } from '../api/newCheckout'
import { setError } from 'redux/slices/cart'
import { useRouter } from 'next/router'
import { v4 as uuidv4 } from 'uuid'

export const Form: React.FC<FormProps> = ({ cart, setShipping }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InfoType>()

  const dispatch = AppDispatch()
  const router = useRouter()

  /* отправит запрос с ключом idemp и получит URL-адрес из бэкэнда, чтобы перенаправить пользователя на страницу покупки */
  const onSubmit: SubmitHandler<InfoType> = async (Info) => {
    if (cart.products.length <= 0) {
      dispatch(setError('you dont have any products'))
    }
    const products = cart.products
    const key = uuidv4()
    const res1 = await newCheckout(key, dispatch, {
      products,
      ...Info,
    })
    res1 !== undefined && router.push(res1 as string)
  }

  return (
    <Information onSubmit={handleSubmit(onSubmit)}>
      <Title>Контакты</Title>
      <Input
        {...register('email', {
          required: 'Пожалуйста, введите свой адрес Эл. адрес',
        })}
        type="email"
        placeholder="Эл. адрес"
      />
      <Title>Адреса доставки</Title>
      <GatheredInput>
        <Input
          {...register('firstName', {
            required: 'Пожалуйста, введите свое Имя',
          })}
          type="text"
          placeholder="Имя"
        />
        <Input
          {...register('lastName', {
            required: 'Пожалуйста, введите свою фамилию',
          })}
          type="text"
          placeholder="Фамилия"
        />
      </GatheredInput>
      <Input
        {...register('address.address', {
          required: 'Пожалуйста, введите свой адрес',
        })}
        type="text"
        placeholder="Адрес"
      />
      <Input
        {...register('address.apartment')}
        type="text"
        placeholder="Квартира, люкс и т. д. (по желанию)"
      />
      <Input
        {...register('address.city', {
          required: 'Пожалуйста, введите свой город',
        })}
        type="text"
        placeholder="Город"
      />
      <GatheredInput>
        <Input
          {...register('address.country', { required: true })}
          type="text"
          placeholder="Страна/регион"
        />
        <Input
          {...register('address.zipCode', {
            required: 'Пожалуйста, введите ваш почтовый индекс',
          })}
          type="text"
          placeholder="почтовый индекс"
        />
      </GatheredInput>
      <InputPhone
        {...register('phoneNumber', {
          required: 'Пожалуйста введите ваш номер телефона',
          pattern: {
            value: /^((\+7|7|8)+([0-9]){10})$/gm,
            message: 'invalid phone number',
          },
          valueAsNumber: true,
        })}
        type="tel"
        placeholder="Телефон — получайте SMS-поддержку, обновления и предложения от нашей команды "
      />
      <Container>
        <Title>Способ доставки</Title>

        <ShippingForm>
          <ShippingWrap>
            <ShippingMethod>
              <InputRadio
                {...register('shippingMethod', { required: true })}
                value="PochtaRussia"
                id="PochtaRussia"
                type="radio"
                defaultChecked
                onClick={(e) => setShipping(Number(handleShipping(e)))}
              />
              <Label htmlFor="PochtaRussia">Почта россии</Label>
              <Price>₽500</Price>
            </ShippingMethod>
            <ShippingMethod>
              <InputRadio
                {...register('shippingMethod', { required: true })}
                value="Cdek"
                id="Ozon"
                type="radio"
                onClick={(e) => setShipping(Number(handleShipping(e)))}
              />
              <Label htmlFor="Ozon">Cdek</Label>
              <Price>₽700</Price>
            </ShippingMethod>
          </ShippingWrap>
        </ShippingForm>
      </Container>
      {errors && (
        <ErrorMessage>
          {errors?.email?.message ||
            errors?.lastName?.message ||
            errors?.address?.address?.message ||
            errors?.address?.city?.message ||
            errors?.address?.zipCode?.message ||
            errors?.phoneNumber?.message}
        </ErrorMessage>
      )}
      <Button type="submit">Checkout</Button>
    </Information>
  )
}

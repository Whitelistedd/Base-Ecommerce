import {
  Button,
  Container,
  ErrorMessage,
  GatheredInput,
  Information,
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
import { Input } from 'components/Input/Input'
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
    console.log(Info)
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
    <Information
      onError={(info) => console.log(info)}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Title>Contact information</Title>
      <Input
        {...register('email', {
          required: 'Enter a valid email',
        })}
        type="email"
        placeholder="Email"
        error={errors?.email?.message}
      />
      <Title>Shipping address</Title>
      <GatheredInput>
        <Input
          {...register('firstName', {
            required: 'Enter a First name',
          })}
          type="text"
          placeholder="First name"
          error={errors?.firstName?.message}
        />
        <Input
          {...register('lastName', {
            required: 'Enter a Last name',
          })}
          type="text"
          placeholder="Last name"
          error={errors?.lastName?.message}
        />
      </GatheredInput>
      <Input
        {...register('address.address', {
          required: 'Enter an address',
        })}
        type="text"
        placeholder="Address"
        error={errors?.address?.address?.message}
      />
      <Input
        {...register('address.apartment')}
        type="text"
        placeholder="Appartment, suite, etc. (optional)"
        error={errors?.address?.apartment?.message}
      />
      <Input
        {...register('address.city', {
          required: 'Enter a City',
        })}
        type="text"
        placeholder="City"
        error={errors?.address?.city?.message}
      />
      <GatheredInput>
        <Input
          {...register('address.country', { required: true })}
          type="text"
          placeholder="Country/Region"
          error={errors?.address?.country?.message}
        />
        <Input
          {...register('address.zipCode', {
            required: 'Enter a postal code',
          })}
          type="text"
          placeholder="Postal code"
          error={errors?.address?.zipCode?.message}
        />
      </GatheredInput>
      <Input
        {...register('phoneNumber', {
          required: 'Enter a phone number',
          pattern: {
            value: /^((\+7|7|8)+([0-9]){10})$/gm,
            message: 'invalid phone number',
          },
          valueAsNumber: true,
        })}
        type="tel"
        placeholder="Phone — recieve SMS-support, updates and offers from our team "
        error={errors?.phoneNumber?.message}
      />
      <Container>
        <Title>Shipping Methods</Title>

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
      <Button type="submit">Checkout</Button>
    </Information>
  )
}

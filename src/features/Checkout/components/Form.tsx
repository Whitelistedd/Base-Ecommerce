import {
  Container,
  GatheredInput,
  Information,
  InputRadio,
  Label,
  Price,
  ShippingForm,
  ShippingMethod,
  ShippingWrap,
  StyledButton,
  SubmitWrap,
  Title,
} from '../assets/Form-styles'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { FormProps, InfoType } from '../types/Checkout.model'
import React, { useEffect } from 'react'

import { AppDispatch } from 'redux/store/store'
import { Checkbox } from 'components/Forms/Checkbox/Checkbox'
import { Failed } from 'components/States/Failed/Failed'
import { Input } from 'components/Forms/Input/Input'
import { Loading } from 'components/States/Loading/Loading'
import { MenuItem } from '@mui/material'
import { Select } from 'components/Forms/Select/Select'
import { setError as dispatchError } from 'redux/slices/cart'
import { handleShipping } from '../utils/handleShippingCost'
import { newCheckout } from '../api/newCheckout'
import { useCountries } from 'features/Countries'
import { useProfileInfo } from 'hooks/useProfileInfo'
import { useRouter } from 'next/router'
import { useUser } from '@auth0/nextjs-auth0'
import { v4 as uuidv4 } from 'uuid'

export const Form: React.FC<FormProps> = ({ cart, setShipping }) => {
  const { user, error } = useUser()

  const {
    register,
    handleSubmit,
    setError,
    control,
    formState: { errors },
  } = useForm<InfoType>()

  const dispatch = AppDispatch()
  const router = useRouter()

  const countries = useCountries()

  const { data, isLoading } = useProfileInfo()

  console.log(data)

  /* отправит запрос с ключом idemp и получит URL-адрес из бэкэнда, чтобы перенаправить пользователя на страницу покупки */
  const onSubmit: SubmitHandler<InfoType> = async (Info) => {
    console.log(Info)
    if (!Info.phoneNumber.match(/^((\+7|7|8)+([0-9]){10})$/gm)) {
      setError('phoneNumber', {
        type: 'custom',
        message: 'invalid phone number',
      })
      return
    }

    if (!user && Info.saveInfo) {
      dispatch(dispatchError('to saveInfo you need to be logged in'))
    }

    if (cart.products.length <= 0) {
      dispatch(dispatchError('you dont have any products'))
    }

    const products = cart.products

    const idemp = uuidv4()

    const res1 = await newCheckout(idemp, dispatch, user, {
      products,
      ...Info,
    })
    res1 !== undefined && router.push(res1 as string)
  }

  if (isLoading) return <Loading />
  if (error) return <Failed />

  return (
    <Information onSubmit={handleSubmit(onSubmit)}>
      <Title>Contact information</Title>
      <Input
        name="email"
        required={'Enter a valid email'}
        defaultValue={data && data?.email}
        control={control}
        type="email"
        placeholder="Email"
        error={errors?.email?.message}
      />
      <Title>Shipping address</Title>
      <GatheredInput>
        <Input
          name="firstName"
          required={'Enter a First name'}
          defaultValue={data && data?.firstName}
          control={control}
          type="text"
          placeholder="First name"
          error={errors?.firstName?.message}
        />
        <Input
          name="lastName"
          required={'Enter a Last name'}
          defaultValue={data && data?.lastName}
          control={control}
          type="text"
          placeholder="Last name"
          error={errors?.lastName?.message}
        />
      </GatheredInput>
      <Input
        name="address.address"
        required={'Enter an address'}
        defaultValue={data && data?.address.address}
        control={control}
        type="text"
        placeholder="Address"
        error={errors?.address?.address?.message}
      />
      <Input
        name="address.apartment"
        required={false}
        defaultValue={data && data?.address.apartment}
        type="text"
        control={control}
        placeholder="Appartment, suite, etc. (optional)"
        error={errors?.address?.apartment?.message}
      />
      <Input
        name="address.city"
        required={'Enter a City'}
        defaultValue={data && data?.address.city}
        control={control}
        type="text"
        placeholder="City"
        error={errors?.address?.city?.message}
      />
      <GatheredInput>
        <Controller
          name="address.country"
          control={control}
          defaultValue={data && data?.address.country}
          rules={{ required: 'Select a Region/Country' }}
          render={({ field }) => (
            <Select
              isClearable
              default
              {...field}
              error={errors?.address?.country?.message}
            >
              {countries.data?.map((country) => (
                <MenuItem key={country.id} value={country.id}>
                  {country.name}
                </MenuItem>
              ))}
            </Select>
          )}
        />
        <Input
          name="address.zipCode"
          required={'Enter a postal code'}
          defaultValue={data && data?.address.zipCode}
          control={control}
          type="text"
          placeholder="Postal code"
          error={errors?.address?.zipCode?.message}
        />
      </GatheredInput>

      <Input
        defaultValue={data && data?.phoneNumber}
        name="phoneNumber"
        required={'Enter a phone number'}
        valueAsNumber={true}
        control={control}
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
      <SubmitWrap>
        {!error && !isLoading && (
          <Checkbox
            disabled={user ? false : true}
            label={'Save Information'}
            name="saveInfo"
            control={control}
            type={'checkbox'}
          />
        )}
        <StyledButton loading={true} type="submit">
          Checkout
        </StyledButton>
      </SubmitWrap>
    </Information>
  )
}

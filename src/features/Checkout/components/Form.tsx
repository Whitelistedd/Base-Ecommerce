import { Checkbox } from '@/components/Forms/Checkbox/Checkbox'
import { Input } from '@/components/Forms/Input/Input'
import { Select } from '@/components/Forms/Select/Select'
import { Loading } from '@/components/States/Loading/Loading'
import { handleShipping } from '@/features/Checkout/utils/handleShippingCost'
import { useCountries } from '@/features/Countries'
import { useProfileInfo } from '@/hooks/useProfileInfo'
import { setError as dispatchError } from '@/redux/slices/cart'
import { AppDispatch } from '@/redux/store/store'
import { useUser } from '@auth0/nextjs-auth0'
import { MenuItem } from '@mui/material'
import { useRouter } from 'next/router'
import React, { useId, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { newCheckout } from '../api/newCheckout'
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
import { FormProps, InfoType } from '../types/Checkout.model'

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
  const [submitting, setSubmitting] = useState(false)

  /* отправит запрос с ключом idemp и получит URL-адрес из бэкэнда, чтобы перенаправить пользователя на страницу покупки */
  const onSubmit: SubmitHandler<InfoType> = async (Info) => {
    setSubmitting(true)
    if (!Info.phoneNumber.match(/^((\+7|7|8)+([0-9]){10})$/gm)) {
      setError('phoneNumber', {
        type: 'custom',
        message: 'invalid phone number',
      })
      setSubmitting(false)
      return
    }

    if (!user && Info.saveInfo) {
      dispatch(dispatchError('to saveInfo you need to be logged in'))
      setSubmitting(false)
      return
    }

    if (cart.products.length <= 0) {
      dispatch(dispatchError('you dont have any products'))
      setSubmitting(false)
      return
    }

    const products = cart.products

    const idemp = useId()

    const res1 = await newCheckout(idemp, dispatch, user, {
      products,
      ...Info,
    })
    res1 !== undefined && router.push(res1 as string)
    setSubmitting(false)
  }

  if (isLoading) return <Loading />

  return (
    <Information onSubmit={handleSubmit(onSubmit)}>
      <Title>Contact information</Title>
      <Input
        name="email"
        required={'Enter a valid email'}
        defaultValue={data?.email ? data.email : ''}
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
        defaultValue={data && data?.address?.address}
        control={control}
        type="text"
        placeholder="Address"
        error={errors?.address?.address?.message}
      />
      <Input
        name="address.apartment"
        required={false}
        defaultValue={data && data?.address?.apartment}
        type="text"
        control={control}
        placeholder="Appartment, suite, etc. (optional)"
        error={errors?.address?.apartment?.message}
      />
      <Input
        name="address.city"
        required={'Enter a City'}
        defaultValue={data && data?.address?.city}
        control={control}
        type="text"
        placeholder="City"
        error={errors?.address?.city?.message}
      />
      <GatheredInput>
        <Select
          name="address.country"
          control={control}
          defaultValue={data && data?.address?.country}
          required={'Select a Region/Country'}
          isClearable
          sx={{ maxHeight: '56px !important' }}
          error={errors?.address?.country?.message}
        >
          {countries?.data?.map((country) => (
            <MenuItem key={country.id} value={country.id}>
              {country.name}
            </MenuItem>
          ))}
        </Select>
        <Input
          name="address.zipCode"
          required={'Enter a postal code'}
          defaultValue={data && data?.address?.zipCode}
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
        <StyledButton loading={submitting} type="submit">
          Checkout
        </StyledButton>
      </SubmitWrap>
    </Information>
  )
}

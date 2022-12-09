import { Add, Remove } from '@mui/icons-material'
import {
  Amount,
  Benifits,
  BenifitsContainer,
  InfoContainer,
  OutOfStockButton,
  Price,
  QuantityContainer,
  QuantityInfo,
  StyledButton,
  Title,
} from '../assets/ProductForm-styles'
import {
  ProductFormProps,
  ProductTypeState,
  handleProductTypeType,
  handleQuantityType,
} from '../types/SingleProduct.model'
import React, { useState } from 'react'

import { Alert } from '@mui/material'
import { AppDispatch } from '@/redux/store/store'
import { SingleProductFilters } from './Filters/Filters'
import { addProduct } from '@/redux/slices/cart'

export const ProductForm: React.FC<ProductFormProps> = ({ productInfo }) => {
  const [productType, setProductType] = useState<ProductTypeState>({
    color: '',
    size: '',
  })
  const [displayError, SetDisplayError] = useState(false)
  const [quantity, setQuantity] = useState(1)
  const dispatch = AppDispatch()

  /* функция добавления фильтров по клику пользователя */
  const handleProductType: handleProductTypeType = (value, name) => {
    setProductType((prev) => ({ ...prev, [name]: value }))
  }

  /* функция изменения количества продукта */
  const handleQuantity = (type: handleQuantityType) => {
    setQuantity((prev) => {
      return type === 'add' ? prev + 1 : prev > 1 ? prev - 1 : prev
    })
  }

  productType

  /* если пользователь выбрал товар с цветом и размером, он будет добавлен в корзину */
  const handleCart = () => {
    if (!productType.color || !productType.size) {
      SetDisplayError(true)
    } else {
      dispatch(
        addProduct({
          ...productInfo,
          quantity,
          ...productType,
        })
      )
    }
  }

  return (
    <InfoContainer>
      <Title>{productInfo?.title}</Title>
      <Price>₽{productInfo?.price}</Price>

      <SingleProductFilters
        SelectedColor={productType?.color}
        SelectedSize={productType?.size}
        AvailableColors={productInfo?.color}
        AvailableSizes={productInfo?.size}
        handleProductType={handleProductType}
      />
      {/* если цвет или размер не выбраны, будет отображаться ошибка */}
      {displayError && (
        <Alert severity="error">Пожалуйста, выберите нужный цвет/размер.</Alert>
      )}
      <QuantityInfo>
        <QuantityContainer>
          <Remove onClick={() => handleQuantity('remove')} />
          <Amount>{quantity}</Amount>
          <Add onClick={() => handleQuantity('add')} />
        </QuantityContainer>
        {/* если товара нет в наличии, пользователь не сможет добавить его в корзину */}
        {productInfo.inStock ? (
          <StyledButton onClick={() => handleCart()}>ADD TO CART</StyledButton>
        ) : (
          <OutOfStockButton>Out Of Stock</OutOfStockButton>
        )}
      </QuantityInfo>
      <BenifitsContainer>
        <Benifits></Benifits>
      </BenifitsContainer>
    </InfoContainer>
  )
}

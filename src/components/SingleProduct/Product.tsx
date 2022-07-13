import React, { useState } from 'react'
import styled from 'styled-components'

import { devices } from '../../data'
import { ImageSwipe } from './Images/ImageSwipe'
import { ProductForm } from './ProductForm'
import { ProductImages } from './Images/ProductImages'
import {
  handleProductTypeType,
  handleQuantityType,
  ProductTypeState,
  ProductProps,
} from './SingleProduct.model'

export const Product: React.FC<ProductProps> = ({ product, productID }) => {
  const [productType, setProductType] = useState<ProductTypeState>({
    color: '',
    size: '',
  })
  const [displayError, SetDisplayError] = useState(false)
  const [quantity, setQuantity] = useState(1)

  /* функция добавления фильтров по клику пользователя */
  const handleProductType = (e: handleProductTypeType) => {
    const value = e.target.value
    const name = e.target.name
    setProductType((prev) => ({ ...prev, [name]: value }))
  }

  /* функция изменения количества продукта */
  const handleQuantity = (type: handleQuantityType) => {
    setQuantity((prev) => {
      return type === 'add' ? prev + 1 : prev > 1 ? prev - 1 : prev
    })
  }

  /* если пользователь выбрал товар с цветом и размером, он будет добавлен в корзину */
  const handleCart = () => {
    if (!productType.color || !productType.size) {
      SetDisplayError(true)
    } else {
      if (typeof window !== 'undefined') {
        const product_id = JSON.stringify(productID)
        const OLDproductsJSON = localStorage.getItem('products')
        const OLDproducts = OLDproductsJSON && JSON.parse(OLDproductsJSON)
        if (OLDproducts) {
          OLDproducts.push({ product_id, quantity: quantity })
          localStorage.setItem('products', JSON.stringify(OLDproducts))
        } else {
          localStorage.setItem(
            'products',
            JSON.stringify([{ product_id, quantity: quantity }])
          )
        }
      }
    }
  }

  return (
    <Container>
      <ProductsWrap>
        <ImageSwipe productInfo={product} />
        <ProductImages productInfo={product} />
        <ProductForm
          handleCart={handleCart}
          handleProductType={handleProductType}
          quantity={quantity}
          handleQuantity={handleQuantity}
          error={displayError}
          productType={productType}
          productInfo={product}
        />
      </ProductsWrap>
    </Container>
  )
}

const Fontcolor = '#9d9d9d'

const ProductsWrap = styled.div`
  display: flex;
  gap: 10em;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
`

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
`

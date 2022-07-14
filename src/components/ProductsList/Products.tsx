/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import { Failed } from '../Failed/Failed'
import { Loading } from '../Loading/Loading'
import { Product } from './Product'
import { ProductsProps } from './ProductsList.model'
import { ProductDataType } from '../GlobalTypes.model'

export const Products: React.FC<ProductsProps> = ({
  className,
  filters,
  HomePage,
  products,
  status,
}) => {
  const [filteredProducts, setFilteredProducts] = useState<
    Array<ProductDataType>
  >([])

  /* useEffect для фильтрации продуктов */
  useEffect(() => {
    if (!filters) return
    if (!Array.isArray(products) || products.length === 0) return
    try {
      const filteredProducts = () => {
        /* если фильтр соответствует категории в объекте продукта, будет показан продукт */
        return products?.filter((item: ProductDataType) =>
          Object.entries(filters).every(([key, value]) =>
            value !== '' ? item[key].includes(value) : item[key].includes
          )
        )
      }
      setFilteredProducts(filteredProducts)
    } catch (err) {}
  }, [products, HomePage, filters])

  /* если продукты все еще загружаются, тогда он покажет этот компонент загрузки */
  if (status === 'loading') {
    return <ProductsLoading />
  }

  if (status === 'error') {
    return <Failed />
  }

  return (
    <Container className={className}>
      {/* если страница не является домашней страницей, будут показаны все продукты, если это домашняя страница, будут показаны только первые 4 */}
      {!HomePage
        ? filteredProducts.map((item: ProductDataType) => (
            <Product item={item} key={item._id} />
          ))
        : products &&
          products
            ?.slice(0, 4)
            .map((item: ProductDataType) => (
              <Product item={item} key={item._id} />
            ))}
    </Container>
  )
}

const ProductsLoading = styled(Loading)`
  width: 100%;
`

const Container = styled.div`
  padding: 20px;
  width: 100%;
  grid-gap: 2em;
  grid-template-rows: repeat(auto, auto);
`

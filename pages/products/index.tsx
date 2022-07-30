import React, { useState } from 'react'
import { useEffect } from 'react'
import styled from 'styled-components'

import { Filters } from '../../src/components/ProductsList/Filters/Filters'
import { Products } from '../../src/components/ProductsList/Products'
import { devices, unFade } from '../../src/data'
import { GetStaticProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import { getAllProducts } from '../../src/apiCalls/apiCalls'
import { useQuery, UseQueryResult } from 'react-query'
import {
  ProductDataType,
  ProductsArrayType,
} from '../../src/components/GlobalTypes.model'
import MobileFilter from '../../src/components/ProductsList/Filters/MobileFilter'
import Head from 'next/head'
import { filtersType } from '../../src/components/ProductsList/ProductsList.model'

export interface ProductsListPageProps {
  products: ProductDataType[]
}

export const ProductsListPage: NextPage<ProductsListPageProps> = ({
  products,
}) => {
  const { query } = useRouter()

  const [filters, setFilters] = useState<filtersType>({
    color: '',
    size: '',
    gender: '',
    categories: '',
  })

  const { data, status }: UseQueryResult<ProductsArrayType, Error> = useQuery<
    ProductsArrayType,
    Error
  >(['products'], getAllProducts, {
    initialData: products.length === 0 ? undefined : products,
  })

  /* обрабатывать фильтры для страницы продуктов */
  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    const name = e.target.name
    setFilters({
      ...filters,
      [name]: value,
    })
  }

  /* функция очистки всех фильтров */
  const handleClear = () => {
    setFilters({
      color: '',
      size: '',
      gender: '',
      categories: '',
    })
  }

  /* изменить фильтр, если URL-адрес имеет категории */

  useEffect(() => {
    if (query.filter === 'men') {
      setFilters((prev) => ({ ...prev, gender: 'men' }))
    } else if (query.filter === 'women') {
      setFilters((prev) => ({ ...prev, gender: 'women' }))
    }
  }, [query])

  return (
    <Container>
      <Head>
        <title>Base | Products</title>
        <meta name="description" content="Base | Products Page" />
      </Head>
      <ProductsWrap>
        <MobileFilter
          handleClear={handleClear}
          handleFilterChange={handleFilterChange}
          filters={filters}
        />
        <FilterContainer>
          <Filters
            handleFilterChange={handleFilterChange}
            handleClear={handleClear}
            filters={filters}
          />
        </FilterContainer>
        <ProductsContainer>
          <StyledProducts
            products={data ? data : []}
            filters={filters}
            status={status}
            HomePage={false}
          />
        </ProductsContainer>
      </ProductsWrap>
    </Container>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const products = await getAllProducts()

  return {
    props: {
      products,
    },
    revalidate: 2000,
  }
}

const ProductsWrap = styled.div`
  display: flex;
  width: 100%;
  margin-top: 100px;
  align-items: flex-start;
  animation: 500ms ease ${unFade};
`

const ProductsContainer = styled.div`
  flex: 5.5;
`

const StyledProducts = styled(Products)`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  .Image {
    min-width: 130px;
    width: 100%;
  }
`

const FilterContainer = styled.div`
  display: flex;
  flex: 1;
  padding: 25px 0px;
  justify-content: center;
`

const Container = styled.div`
  min-height: 100vh;
  @media only screen and (max-width: ${devices.Desktop}px) {
    ${StyledProducts} {
      justify-content: center;
      .Product {
        width: 250px;
      }
      .ProductInfo {
        min-width: 250px;
        font-size: 14px;
      }
      .ProductImage {
        width: 250px;
      }
    }
  }
  @media only screen and (max-width: ${devices.Tablet}px) {
    ${FilterContainer} {
      display: none;
    }
    ${StyledProducts} {
      display: flex;
      justify-content: center;
      .Image {
        min-width: 100px;
        width: 100%;
      }
    }
    ${ProductsWrap} {
      flex-direction: column;
    }
  }
`

export default ProductsListPage

import { GetStaticProps, NextPage } from 'next'
import {
  ProductDataType,
  ProductsArrayType,
  filtersType,
} from 'GlobalTypes/GlobalTypes.model'
import React, { useState } from 'react'
import { getAllProducts, useProductsList } from 'features/Products'

import { Filters } from 'components/Filters/Filters'
import Head from 'next/head'
import MobileFilter from 'components/Filters/MobileFilter'
import { Products } from 'features/Products/components/Products'
import { UseQueryResult } from 'react-query'
import { devices } from 'data/MediaQueries'
import styled from '@emotion/styled'
import { unFade } from 'data/Animations'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

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

  const { data, status }: UseQueryResult<ProductsArrayType, Error> =
    useProductsList(products ? products : [])

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
  display: grid;
  grid-template-rows: repeat(auto, 1fr);
  grid-template-columns: repeat(4, 1fr);

  .Product {
    padding: 0px;
  }

  .ProductInfo {
    min-width: 100px;
  }

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
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media only screen and (max-width: ${devices.Laptop}px) {
    ${FilterContainer} {
      display: none;
    }
    ${ProductsWrap} {
      flex-direction: column;
    }
  }

  @media only screen and (max-width: ${devices.Laptop}px) {
    ${FilterContainer} {
      display: none;
    }
    ${ProductsWrap} {
      flex-direction: column;
    }
  }
  @media only screen and (max-width: 630px) {
    ${StyledProducts} {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media only screen and (max-width: 400px) {
    ${StyledProducts} {
      grid-template-columns: repeat(1, 1fr);
    }
    ${ProductsContainer} {
      width: 100%;
    }
  }
`

export default ProductsListPage

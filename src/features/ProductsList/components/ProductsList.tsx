import {
  Container,
  FilterContainer,
  ProductsContainer,
  ProductsWrap,
  StyledProducts,
} from '../assets/ProductsList-styles'
import { GetStaticProps, NextPage } from 'next'
import {
  ProductDataType,
  ProductsArrayType,
  filtersType,
} from 'GlobalTypes/GlobalTypes.model'
import React, { useState } from 'react'

import { Filters } from 'components/Filters/Filters'
import Head from 'next/head'
import MobileFilter from 'components/Filters/MobileFilter'
import { UseQueryResult } from 'react-query'
import { getAllProducts } from 'features/Products'
import { useEffect } from 'react'
import { useProductsList } from '../../Products/hooks/useProductsList'
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

export default ProductsListPage

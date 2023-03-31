import { Filters } from '@/components/Elements/Filters/Filters'
import MobileFilter from '@/components/Elements/Filters/MobileFilter'
import { unFade } from '@/data/Animations'
import { devices } from '@/data/MediaQueries'
import {
  getAllProducts,
  getProductsListResult,
  useProductsList,
} from '@/features/Products'
import { Products } from '@/features/Products/components/Products'
import { filtersType } from '@/types/GlobalTypes.model'
import { Pagination, useMediaQuery } from '@mui/material'
import { UseQueryResult } from '@tanstack/react-query'
import { GetServerSideProps, GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useMemo, useState } from 'react'
import styled from 'styled-components'

export interface ProductsListPageProps {
  productsData: getProductsListResult
}

export const ProductsListPage: NextPage<ProductsListPageProps> = ({
  productsData,
}) => {
  const router = useRouter()

  const mobile = useMediaQuery('(max-width:1000px)')

  const [filters, setFilters] = useState<filtersType>({
    color: '',
    size: '',
    gender: '',
    categories: '',
  })

  const [currentPage, setCurrentPage] = useState(1)

  /* изменить фильтр, если URL-адрес имеет категории */

  useMemo(() => {
    Object.keys(router.query).map((query) => {
      if (query && query !== 'page')
        setFilters((prev) => ({
          ...prev,
          [`${query}`]: `${router.query[query]}`,
        }))
    })
    if (router.query.page) {
      setCurrentPage(Number(router.query.page))
    }
  }, [router.query])

  const { data, status }: UseQueryResult<getProductsListResult, Error> =
    useProductsList(productsData, currentPage, filters)

  /* обрабатывать фильтры для страницы продуктов */
  const handleFilterChange = (value: string, name: string) => {
    console.log(value, name, 'WWW')
    setFilters({
      ...filters,
      [name]: value,
    })
  }

  /* функция очистки всех фильтров */
  const handleClear = (name?: string) => {
    if (name) {
      setFilters((prev) => ({
        ...prev,
        [name]: '',
      }))
    } else {
      setFilters({
        color: '',
        size: '',
        gender: '',
        categories: '',
      })
    }
  }

  const handlePagination = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setCurrentPage(value)
  }

  return (
    <Container>
      <Head>
        <title>Base | Products</title>
        <meta name="description" content="Base | Products Page" />
      </Head>
      <ProductsWrap>
        {mobile && (
          <MobileFilter
            handleClear={handleClear}
            handleFilterChange={handleFilterChange}
            filters={filters}
          />
        )}
        <FilterContainer>
          <Filters
            handleFilterChange={handleFilterChange}
            handleClear={handleClear}
            filters={filters}
          />
        </FilterContainer>
        <ProductsContainer>
          <StyledProducts
            products={data?.products ? data.products : []}
            filters={filters}
            status={status}
            HomePage={false}
          />
          <Pagination
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            count={data && data.totalPages ? data.totalPages : 1}
            page={currentPage}
            onChange={handlePagination}
          />
        </ProductsContainer>
      </ProductsWrap>
    </Container>
  )
}

export const getServerSidedProps: GetServerSideProps = async () => {
  const productsData = await getAllProducts(1, {
    color: '',
    size: '',
    gender: '',
    categories: '',
  })

  return {
    props: {
      productsData,
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
  width: 100%;
  height: 100%;
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

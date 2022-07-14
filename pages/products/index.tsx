import 'aos/dist/aos.css'

import AOS from 'aos'
import React, { useState } from 'react'
import { useEffect } from 'react'
import styled from 'styled-components'

import { Filters } from '../../src/components/ProductsList/Filters/Filters'
import { Products } from '../../src/components/ProductsList/Products'
import { devices } from '../../src/data'
import { GetServerSideProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import { getAllProducts } from '../../src/apiCalls/apiCalls'
import { useQuery, UseQueryResult } from 'react-query'
import { ProductsListPageProps } from './products.model'
import { ProductsArrayType } from '../../src/components/GlobalTypes.model'
import MobileFilter from '../../src/components/ProductsList/Filters/MobileFilter'

export const ProductsListPage: NextPage<ProductsListPageProps> = ({
  products,
}) => {
  const { query } = useRouter()

  const [filters, setFilters] = useState({
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
    AOS.init()
    AOS.refresh()
  }, [])

  useEffect(() => {
    if (query.filter === 'men') {
      setFilters((prev) => ({ ...prev, gender: 'men' }))
    } else if (query.filter === 'women') {
      setFilters((prev) => ({ ...prev, gender: 'women' }))
    }
  }, [query])

  return (
    <Container>
      <ProductsWrap
        data-aos="fade-up"
        data-aos-offset="0"
        data-aos-delay="0"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="false"
        data-aos-once="true"
      >
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

export const getServerSideProps: GetServerSideProps = async () => {
  const products = await getAllProducts()

  return {
    props: {
      products,
    },
  }
}

const ProductsWrap = styled.div`
  display: flex;
  width: 100%;
  margin-top: 100px;
  align-items: flex-start;
`

const ProductsContainer = styled.div`
  flex: 5.5;
`

const StyledProducts = styled(Products)`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(auto-fit, 1fr);
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
  @media only screen and (max-width: 1200px) {
    ${StyledProducts} {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media only screen and (max-width: ${devices.Tablet}px) {
    ${FilterContainer} {
      display: none;
    }
    ${StyledProducts} {
      display: grid;
      grid-template-columns: repeat(auto-fit, 1fr);
    }
    ${ProductsWrap} {
      flex-direction: column;
    }
  }
  @media only screen and (max-width: ${devices.Phone}px) {
    ${StyledProducts} {
      display: grid;
      grid-template-columns: 1fr;
    }
  }
`

export default ProductsListPage
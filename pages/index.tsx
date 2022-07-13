import 'aos/dist/aos.css'

import AOS from 'aos'
import { useEffect } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { Products } from '../src/components/ProductsList/Products'
import { devices } from '../src/data'
import { Parallax } from 'react-parallax'
import { GetServerSideProps, NextPage } from 'next'
import { getAllProducts } from '../src/apiCalls/apiCalls'
import { useQuery, UseQueryResult } from 'react-query'
import { ProductsArrayType } from '../src/components/GlobalTypes.model'
import { Loading } from '../src/components/Loading/Loading'
import { Failed } from '../src/components/Failed/Failed'

interface HomePageProps {
  products: ProductsArrayType
}

const HomePage: NextPage<HomePageProps> = ({ products }) => {
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])

  const { data, status }: UseQueryResult<ProductsArrayType, Error> = useQuery<
    ProductsArrayType,
    Error
  >(['products'], getAllProducts, {
    initialData: products.length === 0 ? undefined : products,
  })

  if (status === 'loading') {
    return <Loading />
  }

  if (status === 'error') {
    return <Failed />
  }

  return (
    <>
      <StyledParallax bgImage={'/images/background.webp'} strength={400}>
        <HeaderWrap>
          <Link href={'/products?filter=men'}>
            <HeaderButton>Мужчины</HeaderButton>
          </Link>
          <Link href={'/products?filter=women'}>
            <HeaderButton>Женщины</HeaderButton>
          </Link>
        </HeaderWrap>
      </StyledParallax>
      <Container
        data-aos="fade-up"
        data-aos-offset="0"
        data-aos-delay="0"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="false"
        data-aos-once="true"
      >
        <HomeProducts
          status={status}
          HomePage={true}
          products={data ? data : []}
        />
        <Link href={'/products/'}>
          <HeaderButton>Посмотреть продукты</HeaderButton>
        </Link>
      </Container>
    </>
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

const HeaderButton = styled.button`
  font-family: 'Montserra', sans-serif;
  background-color: transparent;
  border: 0px;
  color: white;
  background-color: #282828;
  font-weight: 700;
  letter-spacing: 2px;
  font-size: 1.5rem;
  padding: 0.8em;
  transition: 400ms;
  z-index: 2;
  cursor: pointer;
  &:hover {
    background-color: #1d1c1c;
  }
`

const HeaderWrap = styled.div`
  width: 100%;
  height: 800px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1em;
  flex-wrap: wrap;
`

const HomeProducts = styled(Products)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
  height: 100%;
`

const StyledParallax = styled(Parallax)`
  height: 800px;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (max-width: ${devices.Laptop}px) {
    ${HeaderButton} {
      font-size: 1.2em;
    }
  }

  @media only screen and (max-width: ${devices.Phone}px) {
    ${HeaderButton} {
      font-size: 1em;
      flex-direction: column;
      justify-content: center;
    }
  }
`

export default HomePage

import { GetServerSideProps, GetStaticProps, NextPage } from 'next'
import { ReviewType, Reviews } from '@/features/Reviews'
import { fadeUp, unFade } from '@/data/Animations'
import { getProductsListResult, useProductsList } from '@/features/Products'

import { BASE_URL } from '@/requests'
import { Button } from '@/components/Elements/Button'
import { Category } from '@/components/Elements/Category'
import { Failed } from '@/components/States/Failed/Failed'
import Head from 'next/head'
import Link from 'next/link'
import { Loading } from '@/components/States/Loading/Loading'
import { ProductCategories } from '@/data/Categories'
import { Products } from '@/features/Products/components/Products'
import { UseQueryResult } from '@tanstack/react-query'
import { css } from '@emotion/react'
import { devices } from '@/data/MediaQueries'
import styled from 'styled-components'
import { connect } from '@/lib/connection'

interface HomePageProps {
  productsData: getProductsListResult
  reviews: ReviewType[]
}

const HomePage: NextPage<HomePageProps> = ({ productsData, reviews }) => {
  const { data, status }: UseQueryResult<getProductsListResult, Error> =
    useProductsList(productsData, 1, {})

  if (status === 'loading') {
    return <Loading />
  }

  if (status === 'error') {
    return <Failed />
  }

  return (
    <>
      <Head>
        <title>Base | Home</title>
        <meta name="description" content="Base | Home Page" />
      </Head>
      <HeaderWrap>
        <Link href={'/products'}>
          <HeaderButton
            css={css`
              animation: 500ms ease ${fadeUp};
            `}
          >
            SHOP NOW
          </HeaderButton>
        </Link>
      </HeaderWrap>
      <Container>
        <Categories>
          {ProductCategories.map((category) => (
            <Category
              key={category.id}
              id={category.id}
              image={category.image}
              image2={category.image2}
              title={category.title}
            />
          ))}
        </Categories>
        <HomeProducts
          status={status}
          HomePage={true}
          products={data ? data.products : []}
        />
        <Link href={'/products/'}>
          <AllProductsButton>VIEW ALL PRODUCTS</AllProductsButton>
        </Link>
        <Reviews reviews={reviews} />
      </Container>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { ProductSchema, reviewsSchema } = await connect()
  const productsData = await ProductSchema.find()
    .limit(8)
    .then((response) => JSON.parse(JSON.stringify(response)))
  const reviews = await reviewsSchema
    .find()
    .then((response) => JSON.parse(JSON.stringify(response)))
  return {
    props: {
      productsData: productsData.length > 0 ? productsData : undefined,
      reviews,
    },
  }
}

const HeaderButton = styled(Button)`
  animation-delay: 300ms;
`

const AllProductsButton = styled(HeaderButton)`
  font-size: 0.95em;
`

const HeaderWrap = styled.div`
  width: 100%;
  height: 800px;
  padding-bottom: 20px;
  background: url('/assets/images/background.webp');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  background-size: cover;
  display: flex;
  padding: 0em 0em 2em 2em;
  align-items: center;
  gap: 1em;
  flex-wrap: wrap;
  top: -60px;
  position: relative;
  @media only screen and (max-width: ${devices.Phone}px) {
    justify-content: center;
    justify-content: center;
    padding: 0em;
    font-size: 16px;
  }
`

const Categories = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(1, 1fr);
  width: 100%;
  gap: 50px;
  height: 100%;
  max-height: 800px;
  padding: 0px 20px;
`

const HomeProducts = styled(Products)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
  height: 100%;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: 500ms ${unFade} ease;
  gap: 70px;
  overflow-x: hidden;
  img {
    height: 100%;
  }

  @media only screen and (max-width: ${devices.Laptop}px) {
    ${Categories} {
      gap: 20px;
    }
  }

  @media only screen and (max-width: ${devices.Tablet}px) {
    ${Categories} {
      gap: 5px;
    }
  }

  @media only screen and (max-width: 685px) {
    ${Categories} {
      gap: 50px;
      padding: 0 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      max-height: 100%;
    }
  }

  @media only screen and (max-width: 415px) {
    gap: 50px;
  }
`

export default HomePage

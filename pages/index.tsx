import { Background, Parallax } from 'react-parallax'
import { GetStaticProps, NextPage } from 'next'
import { UseQueryResult, useQuery } from 'react-query'
import { fadeUp, unFade } from 'data/Animations'
import {
  getAllProducts,
  getProductsListResult,
  useProductsList,
} from 'features/Products'

import { Button } from 'components/Button/Button'
import { Failed } from 'components/Failed/Failed'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Loading } from 'components/Loading/Loading'
import { Products } from 'features/Products/components/Products'
import { ProductsArrayType } from 'types/GlobalTypes.model'
import { css } from '@emotion/react'
import { devices } from 'data/MediaQueries'
import styled from '@emotion/styled'

interface HomePageProps {
  productsData: getProductsListResult
}

const HomePage: NextPage<HomePageProps> = ({ productsData }) => {
  const { data, status }: UseQueryResult<getProductsListResult, Error> =
    useProductsList(productsData, 1)

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
      <StyledParallax strength={400}>
        <Background>
          <ParallaxImage>
            <Image
              src={'/assets/images/background.webp'}
              layout="responsive"
              width={1920}
              objectFit="cover"
              alt="background"
              objectPosition={'top'}
              height={800}
            />
          </ParallaxImage>
        </Background>
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
      </StyledParallax>
      <Container>
        <HomeProducts
          status={status}
          HomePage={true}
          products={data ? data.products : []}
        />
        <Link href={'/products/'}>
          <AllProductsButton>VIEW ALL PRODUCTS</AllProductsButton>
        </Link>
      </Container>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const productsData = await getAllProducts(1)

  return {
    props: {
      productsData,
    },
    revalidate: 5000,
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
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;
  background-size: cover;
  display: flex;
  padding: 0em 0em 2em 2em;
  align-items: center;
  gap: 1em;
  flex-wrap: wrap;
  @media only screen and (max-width: ${devices.Phone}px) {
    justify-content: center;
    justify-content: center;
    padding: 0em;
    font-size: 16px;
  }
`

const HomeProducts = styled(Products)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
  height: 100%;
`

const ParallaxImage = styled.div`
  width: 1920px;
  height: 100%;
  --aspect-ratio: 1.7333333333333334;
`

const StyledParallax = styled(Parallax)`
  height: 100%;
  width: 100%;
  top: -60px;
  position: relative;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: 500ms ${unFade} ease;
  gap: 30px;
  overflow-x: hidden;
  img {
    height: 100%;
  }

  @media only screen and (max-width: 415px) {
    gap: 50px;
  }
`

export default HomePage

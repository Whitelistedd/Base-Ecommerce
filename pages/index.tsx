import Link from 'next/link'
import styled, { keyframes } from 'styled-components'
import { Products } from '../src/components/ProductsList/Products'
import { devices, unFade } from '../src/data'
import { Background, Parallax } from 'react-parallax'
import { GetStaticProps, NextPage } from 'next'
import { getAllProducts } from '../src/apiCalls/apiCalls'
import { useQuery, UseQueryResult } from 'react-query'
import { ProductsArrayType } from '../src/components/GlobalTypes.model'
import { Loading } from '../src/components/Loading/Loading'
import { Failed } from '../src/components/Failed/Failed'
import Head from 'next/head'
import Image from 'next/image'

interface HomePageProps {
  products: ProductsArrayType
}

const HomePage: NextPage<HomePageProps> = ({ products }) => {
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
              alt="background"
              height={800}
            />
          </ParallaxImage>
        </Background>
        <HeaderWrap>
          <Link href={'/products?filter=men'}>
            <HeaderButton>Мужчины</HeaderButton>
          </Link>
          <Link href={'/products?filter=women'}>
            <HeaderButton>Женщины</HeaderButton>
          </Link>
        </HeaderWrap>
      </StyledParallax>
      <Container>
        <HomeProducts
          status={status}
          HomePage={true}
          products={data ? data : []}
        />
        <Link href={'/products/'}>
          <AllProductsButton>Посмотреть продукты</AllProductsButton>
        </Link>
      </Container>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const products = await getAllProducts()

  return {
    props: {
      products,
    },
    revalidate: 5000,
  }
}

const fadeUp = keyframes`
  0% {
    transform: translateY(100px);
    opacity: 0%;
  }
  100% {
    transform: translateY(0);
    opacity: 100%;
  }
`

const HeaderButton = styled.button`
  font-family: 'Montserra', sans-serif;
  background-color: transparent;
  border: 0px;
  color: white;
  background-color: #282828;
  font-weight: 700;
  letter-spacing: 2px;
  font-size: 1.3em;
  padding: 0.8em;
  z-index: 2;
  cursor: pointer;
  &:hover {
    background-color: #1d1c1c;
  }
  animation: 500ms ease ${fadeUp};
  animation-delay: 300ms;
`

const AllProductsButton = styled(HeaderButton)`
  font-size: 1.2em;
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
  height: 800px;
`

const StyledParallax = styled(Parallax)`
  height: 800px;
  width: 100%;
  top: -60px;
  position: relative;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: 500ms ${unFade} ease;
  img {
    height: 100%;
  }
  @media only screen and (max-width: ${devices.Laptop}px) {
    ${HeaderButton} {
      font-size: 1.2em;
    }
  }
  @media only screen and (max-width: ${devices.Phone}px) {
    ${HeaderButton} {
      font-size: 1em;
    }
  }
`

export default HomePage

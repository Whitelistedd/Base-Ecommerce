import { GetServerSideProps, NextPage } from 'next'
import { getProduct, useProduct } from '@/features/SingleProduct'

import { Failed } from '@/components/States/Failed/Failed'
import Head from 'next/head'
import { Loading } from '@/components/States/Loading/Loading'
import Product from '@/features/SingleProduct/components/Product'
import { ProductDataType } from '@/types/GlobalTypes.model'
import { fakeProduct } from '@/data/placeHolders'
import { useRouter } from 'next/router'

interface SingleProductProps {
  product: ProductDataType
}

const SingleProductPage: NextPage<SingleProductProps> = ({ product }) => {
  const productID = useRouter().query.id

  const { data, status } = useProduct(productID || '0', product)

  if (status === 'loading') {
    return <Loading />
  }

  if (status === 'error') {
    return <Failed />
  }

  return (
    <>
      <Head>
        <title>Base | {data ? data.title : 'Product'}</title>
        <meta
          name="description"
          content={`Base | ${data ? data.title : 'Product'} Page`}
        />
      </Head>
      <Product product={data ? data : fakeProduct} />
    </>
  )
}
export default SingleProductPage

export const getServerSideProps: GetServerSideProps = async (context) => {
  const queryKey = []
  queryKey[1] = context?.params?.id
  const product = await getProduct({ queryKey })

  return {
    props: {
      product,
    },
  }
}

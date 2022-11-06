import { GetServerSideProps, NextPage } from 'next'
import { Product, getProduct, useProduct } from 'features/SingleProduct'

import Head from 'next/head'
import { Loading } from 'components/Loading/Loading'
import { ProductDataType } from 'GlobalTypes/GlobalTypes.model'
import { fakeProduct } from 'data/placeHolders'
import { useRouter } from 'next/router'

interface SingleProductProps {
  product: ProductDataType
}

const SingleProduct: NextPage<SingleProductProps> = ({ product }) => {
  const location = useRouter()
  const productID = location.query.id ? location.query.id : '0'

  const { data, status } = useProduct(productID, product)

  if (status === 'loading') {
    return <Loading />
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

export default SingleProduct

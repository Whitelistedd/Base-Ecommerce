import { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useQuery } from 'react-query'
import { getProduct } from '../../src/apiCalls/apiCalls'
import { ProductDataType } from '../../src/components/GlobalTypes.model'
import { Loading } from '../../src/components/Loading/Loading'
import { Product } from '../../src/components/SingleProduct/Product'
import { fakeProduct } from '../../src/data'

interface SingleProductProps {
  product: ProductDataType
}

const SingleProduct: NextPage<SingleProductProps> = ({ product }) => {
  const location = useRouter()
  const productID = location.query.id

  const { data, status } = useQuery<ProductDataType, Error>(
    ['product', productID],
    getProduct,
    {
      initialData: !product ? undefined : product,
    }
  )

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

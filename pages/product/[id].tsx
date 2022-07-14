import { GetServerSideProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import { useQuery, UseQueryResult } from 'react-query'
import { getProduct } from '../../src/apiCalls/apiCalls'
import { ProductDataType } from '../../src/components/GlobalTypes.model'
import { Loading } from '../../src/components/Loading/Loading'
import { Product } from '../../src/components/SingleProduct/Product'

interface SingleProductProps {
  product: ProductDataType
}

const SingleProduct: NextPage<SingleProductProps> = ({ product }) => {
  const location = useRouter()
  const productID = location.query.id

  const { data, status }: UseQueryResult<ProductDataType, Error> = useQuery<
    ProductDataType,
    Error
  >(['product', productID], getProduct, {
    initialData: !product ? (product = undefined) : product,
  })

  if (status === 'loading') {
    return <Loading />
  }

  return <Product product={data} />
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

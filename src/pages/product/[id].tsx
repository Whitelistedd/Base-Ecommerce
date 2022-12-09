import { GetServerSideProps, NextPage } from 'next'
import { Product, getProduct, useProduct } from '@/features/SingleProduct'

import Head from 'next/head'
import { Loading } from '@/components/States/Loading/Loading'
import { ProductDataType } from '@/types/GlobalTypes.model'
import { fakeProduct } from '@/data/placeHolders'
import { useSearchParams } from 'next/navigation'

interface SingleProductProps {
	product: ProductDataType
}

const SingleProduct: NextPage<SingleProductProps> = ({ product }) => {
	const productID = useSearchParams().get('id')

	const { data, isLoading } = useProduct(productID || '0', product)

	if (isLoading) {
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

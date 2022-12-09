/* eslint-disable @typescript-eslint/no-explicit-any */

import 'swiper/swiper-bundle.css'

import { ChevronLeft, ChevronRight } from '@mui/icons-material'
import {
	Container,
	HomeContainer,
	HomeProduct,
	Next,
	Prev,
	ProductsLoading,
	StyledSwiper,
} from '../assets/Products-styles'
import { Navigation, Pagination } from 'swiper'

import { Failed } from '@/components/States/Failed/Failed'
import { Product } from './Product'
import { ProductDataType } from '@/types/GlobalTypes.model'
import { ProductsProps } from '../types/Products'
import React from 'react'
import SwiperCore from 'swiper'
import { SwiperSlide } from 'swiper/react'

SwiperCore.use([Navigation, Pagination])

export const Products: React.FC<ProductsProps> = ({
	className,
	HomePage,
	products,
	status,
}) => {
	/* если продукты все еще загружаются, тогда он покажет этот компонент загрузки */
	if (status === 'loading') {
		return <ProductsLoading />
	}

	if (status === 'error') {
		return <Failed />
	}

	return (
		<>
			{/* если страница не является домашней страницей, будут показаны все продукты, если это домашняя страница, будут показаны только первые 4 */}
			{!HomePage ? (
				<Container className={className}>
					{products.map((item: ProductDataType, index: number) => (
						<Product tabIndex={9 + index} item={item} key={item._id} />
					))}
				</Container>
			) : (
				products && (
					<HomeContainer>
						<StyledSwiper
							spaceBetween={20}
							breakpoints={{
								1200: {
									slidesPerView: 4,
								},
								869: {
									slidesPerView: 3,
								},
								686: {
									slidesPerView: 2,
								},
							}}
							slidesPerView={1}
							pagination={{ clickable: true }}
							navigation={{
								nextEl: '.next',
								prevEl: '.prev',
							}}
						>
							<Prev className="prev">
								<ChevronLeft />
							</Prev>
							{products
								?.slice(0, 6)
								.map((item: ProductDataType, index: number) => (
									<SwiperSlide tabIndex={9 + index} key={item._id}>
										<HomeProduct item={item} key={item._id} />
									</SwiperSlide>
								))}
							<Next className="next">
								<ChevronRight />
							</Next>
						</StyledSwiper>
					</HomeContainer>
				)
			)}
		</>
	)
}

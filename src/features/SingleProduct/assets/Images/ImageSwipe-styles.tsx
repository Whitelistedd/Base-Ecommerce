import { ProductImage } from '@/features/SingleProduct/components/Images/ProductImage'
import { Swiper } from 'swiper/react'
import { devices } from '@/data/MediaQueries'
import styled from 'styled-components'

export const StyledProductImage = styled(ProductImage)`
	width: 100%;
	height: 100%;
	span,
	img {
		object-fit: contain;
		height: 100% !important;
	}
`

export const StyledSwiper = styled(Swiper)<{
	navigation: boolean
	modules: unknown[]
}>`
	display: none;
	width: 100%;
	height: 70vw;
	min-height: 560px;

	.swiper-button-prev,
	.swiper-button-next {
		color: black !important;
	}

	img {
		width: 100%;
		${''}
	}

	@media only screen and (max-width: ${devices.Laptop}px) {
		display: flex;
	}
	@media only screen and (max-width: 450px) {
		min-height: 380px;
	}
`

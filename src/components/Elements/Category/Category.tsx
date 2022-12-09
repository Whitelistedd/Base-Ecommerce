import Image from 'next/legacy/image'
import Link from 'next/link'
import { devices } from '@/data/MediaQueries'
import styled from 'styled-components'

interface CategoryProps {
	id: string
	image: string
	title: string
	image2?: string
}

export const Category: React.FC<CategoryProps> = ({ id, image, title }) => {
	return (
		<Link href={`/product/${id}`}>
			<Container>
				<ImageContainer>
					<StyledImage
						layout="responsive"
						alt="categoryImage"
						src={image}
						width={620}
						height={800}
					/>
				</ImageContainer>
				<Title>{title}</Title>
			</Container>
		</Link>
	)
}

const Container = styled.div`
	max-width: 620px;
	max-height: 800px;
	width: 100%;
	height: 100%;
	position: relative;
	@media only screen and (max-width: 685px) {
		max-width: 410px;
		max-height: 500px;
	}
	&:hover {
		cursor: pointer;
	}
`

const ImageContainer = styled.div`
	max-width: 620px;
	max-height: 800px;
	width: 100%;
	height: 100%;
	@media only screen and (max-width: 685px) {
		max-width: 410px;
		max-height: 500px;
	}
`

const StyledImage = styled(Image)``

const Title = styled.h1`
	max-width: 620px;
	max-height: 800px;
	width: 100%;
	font-size: 40px;
	text-align: center;
	font-weight: 300;
	color: white;
	margin: 0px;
	position: absolute;
	top: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;

	@media only screen and (max-width: ${devices.Desktop}px) {
		font-size: 30px;
	}

	@media only screen and (max-width: ${devices.Laptop}px) {
		font-size: 20px;
		width: 100%;
		max-width: 100%;
		max-height: 100%;
	}
`

import {
	Container,
	Image1,
	Image2,
	InfoContainer,
	Price,
	SoldOut,
	StyledImage,
	StyledLink,
	Title,
} from '../assets/Product-styles'
import React, { useState } from 'react'

import { ProductProps } from '../types/Product'
import { css } from '@emotion/react'
import { unFade } from '@/data/Animations'

export const Product: React.FC<ProductProps> = ({
	item,
	className,
	tabIndex,
}) => {
	const [hoveredStatus, setHoveredStatus] = useState(false)
	return (
		<Container
			tabIndex={tabIndex}
			className={`Product ${className}`}
			onMouseEnter={() => setHoveredStatus(true)}
			onMouseLeave={() => setHoveredStatus(false)}
		>
			<StyledLink
				legacyBehavior
				images={item.img}
				href={`/product/${item._id}`}
			>
				<InfoContainer
					className="ProductInfo"
					hoveredStatus={hoveredStatus}
					inStock={item.inStock}
				>
					<Image1
						css={css`
							animation: 60ms ease ${unFade};
						`}
						className="ProductImage"
					>
						{/* если пользователь наводит курсор на изображение, он покажет второе изображение продукта, а если нет, то покажет первое */}
						<StyledImage
							className="Image1"
							src={item.img?.[0] ? item.img?.[0] : '/image'}
							layout="responsive"
							width={300}
							height={400}
							alt={item.title}
						/>
					</Image1>
					<Image2 className="ProductImage">
						<StyledImage
							className="Image2"
							src={item.img?.[1] ? item.img?.[1] : '/image'}
							alt="product-image"
							layout="responsive"
							width={300}
							height={400}
						/>
					</Image2>
					<Title>{item.title}</Title>
					{item.inStock && <Price>₽{item.price}</Price>}
					{/* если товар распродан, появится это сообщение */}
					{!item.inStock && <SoldOut>SOLD OUT</SoldOut>}
				</InfoContainer>
			</StyledLink>
		</Container>
	)
}

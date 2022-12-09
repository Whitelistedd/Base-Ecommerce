import {
	Container,
	ImageSelect,
} from '@/features/SingleProduct/assets/Images/ProductImage-styles'

import { ProductImageProps } from '../../types/ProductImages.model'
import React from 'react'
import { css } from '@emotion/react'
import { fadein } from '@/data/Animations'

const ProductImage: React.FC<ProductImageProps> = ({
	img,
	active,
	selectionNumber,
	handleClick,
	className,
}) => {
	return (
		<Container
			css={css`
				animation-name: ${fadein};
			`}
			className={`${active ? 'active' : ''} ${className ? className : ''}`}
			onClick={() => {
				handleClick && handleClick(img, selectionNumber)
			}}
		>
			<ImageSelect
				alt="ProductImage "
				layout="responsive"
				width={46}
				height={61}
				src={img}
			/>
		</Container>
	)
}

export { ProductImage }

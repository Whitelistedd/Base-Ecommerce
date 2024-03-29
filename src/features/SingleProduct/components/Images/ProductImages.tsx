import {
	ImageContainer,
	ImageGroup,
	MainImage,
} from '../../assets/Images/ProductImages-styles'
import {
	ProductImagesProps,
	handleImageSelectionType,
} from '../../types/ProductImages.model'

import { ProductImage } from './ProductImage'
import React from 'react'
import { css } from '@emotion/react'
import { fadein } from '@/data/Animations'
import { useState } from 'react'

export const ProductImages: React.FC<ProductImagesProps> = ({
	productInfo,
}) => {
	const [imgSelections, setImgSelections] = useState(0)
	const [mainImage, setMainImage] = useState(productInfo?.img?.[0])

	/* изменить основное изображение на изображение, по которому щелкнул пользователь */
	const handleImageSelection: handleImageSelectionType = (
		img,
		selectionNumber
	) => {
		setMainImage(img)
		setImgSelections(selectionNumber)
	}
	return (
		<ImageContainer>
			<ImageGroup>
				{productInfo?.img?.slice(0, 3).map((image: string, index: number) => (
					<ProductImage
						key={image}
						img={image}
						active={imgSelections === index}
						selectionNumber={index}
						handleClick={handleImageSelection}
					/>
				))}
			</ImageGroup>
			<MainImage
				css={css`
					animation-name: ${fadein};
				`}
				alt={productInfo?.title}
				src={mainImage || productInfo?.img?.[0]}
			/>
		</ImageContainer>
	)
}

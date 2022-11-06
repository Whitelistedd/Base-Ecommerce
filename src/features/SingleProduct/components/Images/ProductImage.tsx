import {
  Container,
  ImageSelect,
} from 'features/SingleProduct/assets/Images/ProductImage-styles'

import Image from 'next/image'
import { ProductImageProps } from '../../types/ProductImages.model'
import React from 'react'
import { css } from '@emotion/react'
import { devices } from 'data/MediaQueries'
import { fadein } from 'data/Animations'
import styled from '@emotion/styled'

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
      <ImageSelect layout="responsive" width={46} height={61} src={img} />
    </Container>
  )
}

export { ProductImage }

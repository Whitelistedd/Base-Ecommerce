import React from 'react'
import styled from '@emotion/styled'
import Image from 'next/image'

import { LoadingProps } from './Loading.model'

export const Loading: React.FC<LoadingProps> = ({ className }) => {
  return (
    <>
      <Container className={className}>
        <Wrap>
          <ImageWrap>
            <StyledImage
              layout="responsive"
              width={100}
              height={100}
              src={'/assets/images/loading.webp'}
            />
          </ImageWrap>
        </Wrap>
      </Container>
    </>
  )
}

const ImageWrap = styled.div`
  width: 15vw;
  span {
    display: flex !important;
    align-items: center !important;
    width: 100%;
    height: 100%;
  }
`

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.2em;
  width: 100%;
  height: 100%;
  z-index: 10;
`

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  max-width: 1920px;
  position: fixed;
  height: 100vh;
  z-index: 10;
  background: white;
`

const StyledImage = styled(Image)``

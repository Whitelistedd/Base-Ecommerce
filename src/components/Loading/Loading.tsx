import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import LoadingImage from '../../images/332-loader-3.webp'

import { LoadingProps } from './Loading.model'

export const Loading: React.FC<LoadingProps> = ({ className }) => {
  return (
    <>
      <Container className={className}>
        <Wrap>
          <ImageWrap>
            <StyledImage layout="responsive" src={LoadingImage} />
          </ImageWrap>
        </Wrap>
      </Container>
    </>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`

const ImageWrap = styled.div`
  width: 15vw;
`

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.2em;
  width: 100%;
`

const StyledImage = styled(Image)``

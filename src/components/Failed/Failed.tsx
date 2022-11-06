import Image from 'next/image'
import React from 'react'
import styled from '@emotion/styled'

export const Failed: React.FC = () => {
  return (
    <>
      <Container>
        <Wrap>
          <ImageWrap>
            <StyledImage
              layout="responsive"
              width={100}
              height={100}
              src={'/assets/images/multiply.svg'}
            />
          </ImageWrap>
          <Title>Упс! Что-то пошло не так.</Title>
        </Wrap>
      </Container>
    </>
  )
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.2em;
`

const ImageWrap = styled.div`
  width: 5vw;
`

const StyledImage = styled(Image)``

const Title = styled.h1`
  font-weight: 500;
  margin: 0px;
  font-size: 2rem;
  margin-bottom: 0.5em;
`

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`

import { Typography } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'

export const Left: React.FC = () => {
  return (
    <Container>
      <Title>О магазине</Title>
      <Typography
        letterSpacing={'normal'}
        fontSize={15}
        sx={{ color: 'rgb(109, 109, 109)', mb: 1, mt: 1 }}
      >
        После того, как мы были разочарованы тем, что не смогли найти подходящие
        высококачественные предметы первой необходимости по разумной цене, мы
        решили взять дело в свои руки.
      </Typography>
      <Typography>Подписывайтесь на нас</Typography>
      <SocialContainer>
        <A aria-label="вконтакт" href="https://www.vk.ru/" target={'#blank'}>
          <Icon
            alt="наша страница вконтакт"
            layout="responsive"
            width={30}
            height={30}
            src={'/assets/images/vk.svg'}
          />
        </A>
        <A
          aria-label="инстаграмм"
          href="https://www.instagram.com"
          target={'#blank'}
        >
          <Icon
            alt="наша страница в инстаграмм"
            src={'/assets/images/instagram.svg'}
            width={30}
            height={30}
            layout="responsive"
          />
        </A>
      </SocialContainer>
    </Container>
  )
}

const Icon = styled(Image)``

const Title = styled.div`
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  height: 21.4375px;
  letter-spacing: 2.6px;
  line-height: 21.45px;
  color: rgb(69, 69, 69);
`

const SocialContainer = styled.div`
  display: flex;
  gap: 10px;
`

const A = styled.a`
  color: black;
  width: 25px;
  height: 25px;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 460px;
  line-height: 24px;
  gap: 1em;
  @media (max-width: 1134px) {
    flex-basis: 280px;
  }
`

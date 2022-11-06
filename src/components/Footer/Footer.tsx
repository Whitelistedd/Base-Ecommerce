import { Center } from './Center/Center'
import { CopyrightOutlined } from '@mui/icons-material'
import Image from 'next/image'
import { Left } from './Left/Left'
import React from 'react'
import { Right } from './Right/Right'
import { Typography } from '@mui/material'
import { devices } from 'data/MediaQueries'
import styled from '@emotion/styled'

export const Footer: React.FC = () => {
  return (
    <Container>
      <Info>
        <Left />
        <Center />
        <Right />
      </Info>
      <Bottom>
        <Copyright>
          <CopyrightOutlined sx={{ fontSize: 15 }} />
          <Typography sx={{ fontSize: 15, fontWeight: 800 }}>Base</Typography>
        </Copyright>
        <PaymentMethods>
          <StyledImage
            width={200}
            height={100}
            alt="способы оплаты: Visa, MasterCard, МИР, СБП"
            src={'/assets/images/payments.svg'}
          />
        </PaymentMethods>
      </Bottom>
    </Container>
  )
}

const StyledImage = styled(Image)`
  width: 180px;
  height: 35px;
`

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  flex-direction: row;
  align-items: center;
  margin-top: 80px;
  padding: 0 80px;
  @media only screen and (max-width: ${devices.Phone}px) {
    flex-direction: column;
  }
`

const PaymentMethods = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const Copyright = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
`

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  letter-spacing: 0.12em;
  padding: 0 80px;
  @media (max-width: 1134px) {
    flex-direction: column;
  }
`

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  letter-spacing: 0.12em;
  margin-top: 50px;
  padding: 75px 0 42px;
  flex-direction: column;
  border: solid 1px #efefef;
  height: 700px;

  * {
    font-family: 'FuturaLight';
  }

  @media only screen and (max-width: ${devices.Tablet}px) {
    ${Info} {
      padding: 0 30px;
      gap: 2em;
    }
    ${Copyright} {
      padding: 0 30px;
    }
  }
`

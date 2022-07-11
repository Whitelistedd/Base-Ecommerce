import { CopyrightOutlined } from '@mui/icons-material'
import { Typography } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'

import { Left } from './Left/Left'
import { Center } from './Center/Center'
import { Right } from './Right/Right'
import { devices } from '../../data'
import Payments from '../../images/payments.svg'

export const Footer: React.FC = () => {
  return (
    <Container>
      <Info>
        <Left />
        <Center />
        <Right />
      </Info>
      <Copyright>
        <CopyrightLeft>
          <CopyrightOutlined sx={{ fontSize: 15 }} />
          <Typography sx={{ fontSize: 13 }}>Volxen</Typography>
        </CopyrightLeft>
        <CopyrightRight>
          <StyledImage
            width={200}
            alt="способы оплаты: Visa, MasterCard, МИР, СБП"
            src={Payments}
          />
        </CopyrightRight>
      </Copyright>
    </Container>
  )
}

const StyledImage = styled(Image)`
  width: 180px;
  height: 35px;
`

const Copyright = styled.div`
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

const CopyrightRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const CopyrightLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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

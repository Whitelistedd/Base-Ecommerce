import { Button } from '@/components/Elements/Button'
import { devices } from '@/data/MediaQueries'
import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  max-width: 1200px;
  width: 100%;
  padding: 0px 60px;
  gap: 2em;
  font-size: 16px;
`

export const Top = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid #dcdcdc;
  color: #9d9d9d;
`

export const ProductsTitle = styled.h1`
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 2.4px;
  flex: 2;
`

export const ProductsQauntity = styled.span`
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 2.4px;
  flex: 1;
  text-align: center;
`

export const ProductsTotal = styled.span`
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 2.4px;
  flex: 1;
  text-align: right;
`
export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3em;
`

export const Bottom = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 1em;
  padding-top: 1em;
  flex-direction: column;
  border-top: 1px solid #dcdcdc;
`

export const Total = styled.span`
  font-size: 1em;
`

export const Shipping = styled.span`
  font-size: 0.95em;
`

export const StyledButton = styled(Button)`
  font-size: 0.9em;
  background-color: rgb(244, 112, 38);
  letter-spacing: 0.2em;
  font-weight: 700;
  padding: 13px 20px;
  &:hover {
    background-color: rgb(220, 112, 38);
  }
`

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 70vh;
  color: #9d9d9d;
  @media only screen and (max-width: 700px) {
    justify-content: center;
    ${Top} {
      display: none;
    }
    ${Shipping} {
      text-align: right;
    }
    ${StyledButton} {
      width: 100%;
    }
  }

  @media only screen and (max-width: ${devices.Phone}px) {
    ${Wrapper} {
      padding: 0px 20px;
    }
  }
`

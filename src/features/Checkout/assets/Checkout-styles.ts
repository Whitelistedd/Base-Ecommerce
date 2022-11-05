import { devices } from 'data/MediaQueries'
import styled from 'styled-components'

export const CheckoutWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
  gap: 2em;
`

export const CostWrap = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid #e1e1e1;
  border-bottom: 1px solid #e1e1e1;
  padding: 1em 0em;
  gap: 0.5em;
`
export const CostItem = styled.div`
  display: flex;
  justify-content: space-between;
`

export const CostTitle = styled.p`
  font-size: 14px;
  margin: 0px;
  color: rgb(83, 83, 83);
`

export const Price = styled.p`
  color: rgb(50, 50, 50);
  font-weight: 600;
  margin: 0px;
  font-size: 15px;
`

export const TotalTitle = styled.p`
  color: rgb(83, 83, 83);
  margin: 0px;
`

export const TotalCost = styled.p`
  font-weight: 500;
  margin: 0px;
  font-size: 20px;
`

export const CheckOut = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding-top: 4em;
  padding-left: 2em;
  background: #fafafa;

  @media only screen and (max-width: ${devices.Laptop}px) {
    padding: 4em 0em 0em 0em;
    height: 50vh;
    background-color: white;
    align-items: center;
    ${CheckoutWrap} {
      width: 90%;
    }
  }
`

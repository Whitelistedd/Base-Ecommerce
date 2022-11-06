import { devices } from 'data/MediaQueries'
import styled from '@emotion/styled'

export const Fontcolor = '#9d9d9d'

export const ProductsWrap = styled.div`
  display: flex;
  gap: 10em;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
`

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 90vh;
  margin-bottom: 9em;
  align-items: center;
  color: ${Fontcolor};
  @media only screen and (max-width: ${devices.Desktop}px) {
    ${ProductsWrap} {
      gap: 0em;
    }
  }
  @media only screen and (max-width: ${devices.Laptop}px) {
    ${ProductsWrap} {
      flex-direction: column;
      width: 100vw;
      align-items: center;
      min-height: 100vh;
    }
    min-height: 100vh;
    margin-bottom: 0px;
  }
`

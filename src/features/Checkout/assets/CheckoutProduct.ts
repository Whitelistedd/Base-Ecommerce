import Image from 'next/image'
import { devices } from 'data/MediaQueries'
import styled from 'styled-components'

export const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5em;
`

export const Price = styled.p`
  color: rgb(50, 50, 50);
  font-weight: 600;
  margin: 0px;
  font-size: 15px;
`

export const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  font-family: 'FuturaLight';
`

export const ItemName = styled.p`
  font-weight: 700;
  font-family: 'FuturaLight';
  font-size: 14px;
  margin: 0px;
`

export const ProductImage = styled.div`
  width: 70px;
  max-width: 60px;
  max-height: 100px;
`

export const StyledImage = styled(Image)`
  border-radius: 5px;
`

export const ItemExtraInfo = styled.p`
  font-size: 12px;
  color: grey;
  font-family: 'FuturaLight';
  margin: 0px;
`

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

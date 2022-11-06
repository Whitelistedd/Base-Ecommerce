import { devices } from 'data/MediaQueries'
import styled from '@emotion/styled'

export const MainImage = styled.img`
  width: 430px;
  height: 60vh;
  object-fit: cover;
  padding: 5px;
  transition: 300ms;
  animation-duration: 8s;
`

export const ImageGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1em;
  height: 100%;
  @media only screen and (max-width: ${devices.Desktop}px) {
    width: 50%;
    ${MainImage} {
      height: 70%;
      width: 70%;
    }
  }
  @media only screen and (max-width: ${devices.Laptop}px) {
    flex-direction: column;
    gap: 0.2em;
    margin-top: 4em;
    display: none;

    ${ImageGroup} {
      flex-direction: row;
      justify-content: space-between;
    }
    ${MainImage} {
      max-width: 98%;
      max-height: 60vh;
    }
  }
`

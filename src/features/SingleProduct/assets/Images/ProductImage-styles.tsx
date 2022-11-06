import Image from 'next/image'
import { devices } from 'data/MediaQueries'
import { fadein } from 'data/Animations'
import styled from '@emotion/styled'

export const ImageSelect = styled(Image)``

export const Container = styled.div`
  min-width: 80px;
  min-height: 80px;
  width: 4vw;
  object-fit: contain;
  transition: 300ms ease;
  padding: 5px;
  animation-duration: 8s;
  animation-iteration-count: 1;
  &:hover {
    cursor: pointer;
  }

  &.active {
    box-shadow: 0px 0px 0px 2px black;
  }
  @media only screen and (max-width: ${devices.Desktop}px) {
    width: 6vw;
  }

  @media only screen and (max-width: ${devices.Tablet}px) {
    height: 100%;
    object-fit: contain;
    &.active {
      box-shadow: 0px 0px 0px 0px transparent;
    }
  }
`

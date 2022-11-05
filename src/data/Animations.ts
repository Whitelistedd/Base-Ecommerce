import { keyframes } from 'styled-components'

export const unFade = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
`

export const fadeUp = keyframes`
  0% {
    transform: translateY(100px);
    opacity: 0%;
  }
  100% {
    transform: translateY(0);
    opacity: 100%;
  }
`

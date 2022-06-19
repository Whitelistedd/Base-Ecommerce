import { createGlobalStyle } from 'styled-components';

import Barlow from './fonts/Barlow-Medium.ttf';
import FuturaBook from './fonts/FuturaBook.ttf';

export const FontStyles = createGlobalStyle`

@font-face {
  font-family: 'FuturaLight';
  src: url(${FuturaBook}) format('truetype');
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: 'Barlow';
  src: url(${Barlow}) format('truetype');
  font-weight: normal;
  font-style: normal;
}
`;
import { css } from '@emotion/react'

const GlobalStyles = css`
	@font-face {
		font-family: 'FuturaLight';
		src: url('/assets/fonts/FuturaBook.ttf') format('truetype');
		font-weight: normal;
		font-style: normal;
	}
	@font-face {
		font-family: 'Barlow';
		src: url('/assets/fonts/Barlow-Medium.ttf') format('truetype');
		font-weight: normal;
		font-style: normal;
	}
	@font-face {
		font-family: 'Golos';
		src: url('/assets/fonts/Golos-UI_Regular.ttf') format('truetype');
		font-weight: normal;
		font-style: normal;
	}
	@font-face {
		font-family: 'DIN Neuzeit';
		src: url('/assets/fonts/DIN.ttf') format('truetype');
		font-weight: normal;
		font-style: normal;
	}

	.css-10nakn3-MuiModal-root-MuiPopover-root-MuiMenu-root {
		z-index: 5000;
	}

	* {
		font-family: DIN Neuzeit, sans-serif;
		box-sizing: border-box;
	}

	a {
		text-decoration: none;
	}
`

export default GlobalStyles

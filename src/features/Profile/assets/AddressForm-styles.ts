import styled from 'styled-components'
import { unFade } from '@/data/Animations'

export const Form = styled.form`
	height: 100%;
	display: flex;
	flex-direction: column;
	gap: 20px;
`

export const Desc = styled.p`
	font-size: 0.95em;
	text-align: center;
`

export const Title = styled.h1`
	margin: 0px;
	letter-spacing: 2px;
	font-size: 1.7em;
	text-align: center;
`

export const Wrap = styled.div`
	background-color: white;
	width: 100%;
	max-width: 500px;
	display: flex;
	flex-direction: column;
	border-radius: 10px;
	padding: 30px 40px 50px 40px;
`

export const Container = styled.div<{ showAddressForm: boolean }>`
	position: fixed;
	background-color: #4e4e4e60;
	height: 100vh;
	width: 100%;
	z-index: 1000;
	display: ${({ showAddressForm }) => (showAddressForm ? 'flex' : 'none')};
	top: 0px;
	padding: 50px 20px;
	color: grey;
	align-items: center;
	justify-content: center;
	transition: 400ms ease;
	animation: ${unFade} 400ms ease;

	* {
		font-family: 'FuturaLight';
	}
`

import styled from 'styled-components'

export const OptionSelect = styled.div``

export const StyledInput = styled.input``

export const StyledH3 = styled.h3``

export const SizesButton = styled.span`
	margin: 10px;
	max-width: 40px;
	max-height: 40px;
	border: 1px solid black;
	display: inline-block;
	position: relative;
	text-align: center;
	cursor: pointer;
	color: black;
	${OptionSelect} {
		width: 40px;
		height: 40px;
		display: flex;
		justify-content: center;
		align-items: center;
		font-weight: 100;
		font-size: 13px;
	}
`

export const SizeRadioLabel = styled.label`
	width: 53px;

	input {
		display: none;
	}

	${StyledInput}:checked ~ ${StyledH3} {
		font-weight: 900;
	}

	${StyledInput}:checked + ${SizesButton} {
		background-color: black;
		color: white;
	}
`

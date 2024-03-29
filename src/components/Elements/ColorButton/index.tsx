import { ColorButtonProps } from './ColorButton.model'
import React from 'react'
import styled from 'styled-components'

export const ColorRadioButton: React.FC<ColorButtonProps> = ({
	colorName,
	HexColor,
	handleFilterChange,
	className,
	filters,
}) => {
	return (
		<CustomColorRadio className={className}>
			{/* если компонент, который генерируется, является компонентом фильтра, тогда он будет отображать первый, если нет, он будет отображать второй */}
			{filters ? (
				<StyledInput
					value={colorName}
					onChange={(event) => handleFilterChange(colorName, 'color')}
					type="radio"
					checked={colorName === filters.color}
				/>
			) : (
				<StyledInput
					value={colorName}
					onChange={(event) => handleFilterChange(colorName, 'color')}
					type="radio"
					name="color"
				/>
			)}
			<ColorButton HexColor={HexColor}>
				<OptionSelect>
					<StyledH3></StyledH3>
				</OptionSelect>
			</ColorButton>
		</CustomColorRadio>
	)
}

const OptionSelect = styled.div``

const StyledInput = styled.input``

const StyledH3 = styled.h3`
	padding: 0px;
	margin: 0px;
`

const ColorButton = styled.span<{ HexColor: string }>`
	margin-top: 5px;
	max-width: 25px;
	max-height: 25px;
	display: inline-block;
	border-radius: 50px;
	cursor: pointer;
	background-color: ${({ HexColor }) => HexColor};
	color: ${({ HexColor }) => HexColor};
	border: 1px solid black;
	transition: 300ms ease;
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

const CustomColorRadio = styled.label`
	width: 30px;

	input {
		display: none;
	}

	${StyledInput}:checked ~ ${StyledH3} {
		font-weight: 900;
	}

	${StyledInput}:checked + ${ColorButton} {
		transform: scale(1.2);
		transition: 300ms ease;
	}
	border-radius: 50px;
`

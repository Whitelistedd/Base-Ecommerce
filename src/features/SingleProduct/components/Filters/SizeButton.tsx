import {
	OptionSelect,
	SizeRadioLabel,
	SizesButton,
	StyledH3,
	StyledInput,
} from '@/features/SingleProduct/assets/Filters/SizeButton-styles'

import React from 'react'
import { SizeButtonProps } from '../../types/Filters.model'
import styled from 'styled-components'

export const SizeButton: React.FC<SizeButtonProps> = ({
	handleProductType,
	value,
	title,
}) => {
	return (
		<SizeRadioLabel>
			<StyledInput
				onChange={() => handleProductType(value, 'size')}
				value={value}
				type="radio"
				name="size"
			/>
			<SizesButton>
				<OptionSelect>
					<StyledH3>{title}</StyledH3>
				</OptionSelect>
			</SizesButton>
		</SizeRadioLabel>
	)
}

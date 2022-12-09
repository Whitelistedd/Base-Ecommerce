import { ColorRadioButton } from '@/components/Elements/ColorButton/ColorButton'
import styled from 'styled-components'

export const FilterContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: -5px;
	margin-bottom: -25px;
`

export const Filter = styled.div`
	display: flex;
`

export const SelectedFilter = styled.span`
	font-weight: 400;
	font-size: 14px;
`

export const FilterTitle = styled.h4`
	font-weight: 700;
	margin-top: 0;
	margin-bottom: 8px;
`

export const StyledColorRadioButton = styled(ColorRadioButton)`
	width: 53px;
	span {
		margin: 10px;
		max-width: 40px;
		max-height: 40px;
	}
`

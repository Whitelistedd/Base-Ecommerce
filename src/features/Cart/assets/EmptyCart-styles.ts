import { Button } from '@/components/Elements/Button/Button'
import styled from 'styled-components'

export const StyledButton = styled(Button)`
	height: 49px;
	letter-spacing: 3px;
	padding: 0.7em 1.7em;
	&:hover {
		opacity: 0.9;
		transition: 400ms ease;
		cursor: pointer;
	}
`

export const EmptyContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 2em;
	font-family: 'FuturaLight';
`

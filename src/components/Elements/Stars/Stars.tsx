import { Rating } from '@mui/material'
import { Stars as Star } from '@mui/icons-material'
import styled from 'styled-components'

interface StarsProps {
	amount: number
}

export const Stars: React.FC<StarsProps> = ({ amount }) => {
	return (
		<>
			<StyledRating
				icon={<StyledStar fontSize="inherit" />}
				name="read-only"
				value={amount}
				readOnly
			/>
		</>
	)
}

const StyledStar = styled(Star)`
	color: #389899;
`

const StyledRating = styled(Rating)`
	padding-top: 5px;
`

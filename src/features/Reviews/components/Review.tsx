import {
	Container,
	Date,
	Desc,
	Details,
	Info,
	Product,
	Title,
	Wrap,
} from '../assets/Review-styles'

import { ReviewProps } from '../types/Review'
import { Stars } from '@/components/Elements/Stars/Stars'
import { useMediaQuery } from '@mui/material'

export const Review: React.FC<ReviewProps> = ({
	title,
	desc,
	product,
	stars,
	date,
}) => {
	const Desktop = useMediaQuery('(min-width: 1600px)')

	const Laptop = useMediaQuery('(min-width: 1000px)')

	return (
		<Container>
			<Wrap>
				<Info>
					<Stars amount={stars} />
					<Title>{title}</Title>
					<Desc>
						{desc?.length > 100 && !Desktop
							? `${desc?.slice(0, Laptop ? 100 : 60)}...`
							: desc}
					</Desc>
				</Info>
				<Details>
					<Product>{product}</Product>
					<Date>{date}</Date>
				</Details>
			</Wrap>
		</Container>
	)
}

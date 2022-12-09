import Image from 'next/legacy/image'
import React from 'react'
import { Typography } from '@mui/material'
import styled from 'styled-components'

export const Left: React.FC = () => {
	return (
		<Container>
			<Title>ABOUT THE SHOP</Title>
			<Typography
				letterSpacing={'normal'}
				fontSize={15}
				sx={{ color: '#9d9d9d', mb: 1, mt: 1 }}
			>
				After being frustrated with being unable to find fitted high quality
				essentials at a fair price, we decided to take matters in to our own
				hands.
			</Typography>
			<Typography>Follow us</Typography>
			<SocialContainer>
				<A aria-label="вконтакт" href="https://www.vk.ru/" target={'#blank'}>
					<Icon
						alt="наша страница вконтакт"
						layout="responsive"
						width={30}
						height={30}
						src={'/assets/images/vk.svg'}
					/>
				</A>
				<A
					aria-label="инстаграмм"
					href="https://www.instagram.com"
					target={'#blank'}
				>
					<Icon
						alt="наша страница в инстаграмм"
						src={'/assets/images/instagram.svg'}
						width={30}
						height={30}
						layout="responsive"
					/>
				</A>
			</SocialContainer>
		</Container>
	)
}

const Icon = styled(Image)``

const Title = styled.div`
	font-size: 0.8em;
	font-style: normal;
	font-weight: 700;
	height: 21.4375px;
	letter-spacing: 2.6px;
	line-height: 21.45px;
	color: rgb(69, 69, 69);
`

const SocialContainer = styled.div`
	display: flex;
	gap: 10px;
`

const A = styled.a`
	color: black;
	width: 25px;
	height: 25px;
`

const Container = styled.div`
	display: flex;
	flex-direction: column;
	flex-basis: 400px;
	line-height: 24px;
	gap: 1em;
	* {
		font-family: 'FuturaLight';
	}
	@media (max-width: 1134px) {
		flex-basis: 280px;
	}
`

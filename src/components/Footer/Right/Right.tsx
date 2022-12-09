import { Button } from '@/components/Elements/Button/Button'
import React from 'react'
import { Typography } from '@mui/material'
import styled from 'styled-components'

export const Right: React.FC = () => {
	return (
		<Container>
			<Title>NEWSLETTER</Title>
			<Typography
				sx={{
					mt: 3,
					mb: 2,
					fontSize: '15px',
					fontStyle: 'normal',
					fontWeight: 400,
					color: '#9d9d9d',
				}}
			>
				Subscribe to receive updates, access to exclusive deals, and more.
			</Typography>
			<Input placeholder="Enter your email address" />
			<StyledButton>SUBSCRIBE</StyledButton>
		</Container>
	)
}

const StyledButton = styled(Button)`
	margin-top: 10px;
	font-size: 0.9em;
	width: 163px;
`

const Title = styled.div`
	font-size: 0.8em;
	font-style: normal;
	font-weight: 700;
	height: 21.4375px;
	letter-spacing: 2.6px;
	line-height: 21.45px;
	color: rgb(69, 69, 69);
`

const Input = styled.input`
	display: block;
	padding: 12px 14px;
	border: 1px solid rgba(0, 0, 0, 0.2);
	font-size: 15px;
	outline: none;
	&:focus {
		border: 1px solid rgba(0, 0, 0, 0.5);
	}
`

const Container = styled.div`
	display: flex;
	flex-direction: column;
	flex-basis: 300px;
`

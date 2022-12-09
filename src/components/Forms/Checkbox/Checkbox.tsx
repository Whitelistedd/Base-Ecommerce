import { Controller } from 'react-hook-form'
import MuiCheckbox from '@mui/material/Checkbox'
import styled from 'styled-components'

export const Checkbox = (props: any) => {
	return (
		<Controller
			name={props.name}
			control={props.control}
			rules={{
				required: props.required,
				pattern: props.pattern,
			}}
			render={({ field }) => (
				<Container>
					<StyledCheckbox {...field} {...props} />
					{props.label && <Label>{props.label}</Label>}
				</Container>
			)}
		/>
	)
}

const Container = styled.div`
	display: flex;
	align-items: center;
`

const Label = styled.p`
	font-size: 0.85em;
	margin: 0px;
	font-family: 'Roboto';
`

const StyledCheckbox = styled(MuiCheckbox)<{ error: string }>`
	outline: ${({ error }) => (error ? '2px solid red' : 'none')};
	&:focus {
		outline: 2px solid #b69f8d;
	}
`

import { ButtonProps } from './Button.model'
import { LoadingButton } from '@mui/lab'
import styled from 'styled-components'

export const Button: React.FC<ButtonProps> = ({
	onClick,
	type,
	loading,
	sx,
	children,
	className,
}) => {
	return (
		<StyledButton
			className={className}
			onClick={onClick}
			type={type}
			sx={sx}
			ref={null}
			loading={loading !== undefined ? loading : false}
		>
			{children}
		</StyledButton>
	)
}

export const StyledButton = styled(LoadingButton)<{ loading: boolean }>`
	font-family: DIN Neuzeit, sans-serif;
	font-weight: 100;
	background-color: transparent;
	border: 0px;
	color: white;
	background-color: #282828;
	font-weight: 700;
	letter-spacing: 2px;
	font-size: 1em;
	padding: 0.8em 1.5em;
	z-index: 2;
	cursor: pointer;
	transition: 300ms ease;
	border-radius: 1.5px;

	${({ loading }) =>
		loading &&
		`
  background-color: grey !important;
  `}

	&:hover {
		background-color: #1d1c1c;
	}
	&:disabled {
		color: grey;
		cursor: not-allowed;
	}
`

import { Container, HeaderButton } from '../assets/Header-styles'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const Header = () => {
	const pathname = usePathname()

	return (
		<Container>
			{pathname?.includes('/profile') ? (
				<Link href="/api/auth/logout">
					<HeaderButton>LOGOUT</HeaderButton>
				</Link>
			) : (
				<Link href="/profile">
					<HeaderButton>GO BACK TO PROFILE</HeaderButton>
				</Link>
			)}
		</Container>
	)
}

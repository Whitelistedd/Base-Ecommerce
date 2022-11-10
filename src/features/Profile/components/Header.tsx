import { Container, HeaderButton } from '../assets/Header-styles'

import Link from 'next/link'
import { useRouter } from 'next/router'

export const Header = () => {
  const router = useRouter()

  return (
    <Container>
      {router.asPath === '/profile' ? (
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

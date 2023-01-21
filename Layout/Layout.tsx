import { Footer } from '@/components/Footer/Footer'
import { Navbar } from '@/components/Navbar/Navbar'
import styled from '@emotion/styled'
import { useRouter } from 'next/router'

export const Layout: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const router = useRouter()

  return (
    <Container>
      <Wrap>
        <Navbar homePage={router.pathname === '/' ? true : false} />
        {children}
        <Footer />
      </Wrap>
    </Container>
  )
}

const Wrap = styled.div`
  max-width: 1920px;
  width: 100%;
`

const Container = styled.div`
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fefeff;
`

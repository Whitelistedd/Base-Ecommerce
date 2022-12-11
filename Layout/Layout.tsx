import { Announcement } from '@/components/Elements/Announcement/Announcement'
import { Footer } from '@/components/Footer/Footer'
import { Navbar } from '@/components/Navbar/Navbar'
import styled from '@emotion/styled'
import { useRouter } from 'next/router'

export const Layout: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const router = useRouter()

  return (
    <html lang="en">
      <Container>
        <Wrap>
          <Announcement />
          <Navbar homePage={router.pathname === '/' ? true : false} />
          <head />
          <body>{children}</body>
          <Footer />
        </Wrap>
      </Container>
    </html>
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

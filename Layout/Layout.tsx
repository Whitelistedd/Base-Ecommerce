import { Announcement } from 'components/Announcement/Announcement'
import { Footer } from 'components/Footer/Footer'
import { Navbar } from 'components/Navbar/Navbar'
import React from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'

export const Layout: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const router = useRouter()

  return (
    <Container>
      <Wrap>
        <Announcement />
        <Navbar homePage={router.pathname === '/' ? true : false} />
        {children}
        <Footer />
      </Wrap>
    </Container>
  )
}

const Wrap = styled.div`
  max-width: 1920px;
  width: 100vw;
`

const Container = styled.div`
  max-width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
  background: #fefeff;
`

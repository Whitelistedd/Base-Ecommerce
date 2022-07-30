import React from 'react'
import { Announcement } from '../src/components/Announcement/Announcement'
import { Navbar } from '../src/components/Navbar/Navbar'
import { Footer } from '../src/components/Footer/Footer'
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

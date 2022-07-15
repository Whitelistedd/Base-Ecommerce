import React, { useState } from 'react'
import { Announcement } from '../src/components/Announcement/Announcement'
import { Navbar } from '../src/components/Navbar/Navbar'
import { Footer } from '../src/components/Footer/Footer'
import styled from 'styled-components'
import { Popup } from '../src/components/Popup/Popup'

export const Layout: React.FC<any> = ({ children }) => {
  const [showPopup, setShowPopup] = useState(true)

  const ClosePopup = () => {
    setShowPopup(false)
  }

  return (
    <Container>
      <Wrap>
        {showPopup && <Popup ClosePopup={ClosePopup} />}
        <Announcement />
        <Navbar />
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
`

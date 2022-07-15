import Alert from '@mui/material/Alert'
import React, { useState } from 'react'
import styled from 'styled-components'

import { displayAnnouncementType } from './Announcement.model'

const Container = styled.div<{ displayAnnouncement: displayAnnouncementType }>`
  display: ${(props) => (props.displayAnnouncement ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  padding: 0em 1em;
  flex-direction: column;
  background-color: #f2f2f3;
  min-height: 44px;
`

const Title = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  font-size: 14px;
  letter-spacing: 2px;
  height: 44px;
`

/* компонент для размещения объявлений в верхней части страницы */

export const Announcement: React.FC = () => {
  const [displayAnnouncement, setDisplayAnnouncement] =
    useState<displayAnnouncementType>(false)

  const handleClose = () => {
    setDisplayAnnouncement((prev) => (prev ? false : true))
  }

  return (
    <Container displayAnnouncement={displayAnnouncement}>
      <Alert onClose={() => handleClose()} severity="warning">
        <Title>w</Title>
      </Alert>
    </Container>
  )
}

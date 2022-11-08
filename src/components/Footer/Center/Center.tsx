import { FooterPages } from 'data/footerPages'
import { List } from '@mui/material'
import React from 'react'
import styled from '@emotion/styled'

export const Center: React.FC = () => {
  return (
    <Container>
      <Title>HELP</Title>
      <List
        sx={{
          mt: 1,
          display: 'flex',
          gap: 1,
          flexDirection: 'column',
        }}
      >
        {FooterPages.map((page) => (
          <ListItemText key={page}>{page}</ListItemText>
        ))}
      </List>
    </Container>
  )
}

const ListItemText = styled.li`
  letter-spacing: 0.5px;
  font-size: 0.95em;
  color: #9d9d9d;
  &:hover {
    cursor: pointer;
    color: black;
  }
`

const Title = styled.div`
  font-size: 0.8em;
  font-style: normal;
  font-weight: 700;
  height: 21.4375px;
  letter-spacing: 2.6px;
  line-height: 21.45px;
  color: rgb(69, 69, 69);
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 1 auto;
  line-height: 24.75px;
  @media (max-width: 1134px) {
    margin-bottom: 5em;
  }
`

import { Drawer, List, ListItem, ListItemText, Typography } from '@mui/material'

import Close from '@mui/icons-material/Close'
import Link from 'next/link'
import { NavMenuProps } from '../Navbar.model'
import React from 'react'
import styled from 'styled-components'

const drawerWidth = '330px'

export const NavMenu: React.FC<NavMenuProps> = ({
  toggleDrawer,
  open,
  NavMenuItems,
}) => {
  return (
    <Drawer
      onClose={toggleDrawer}
      open={open}
      sx={{
        width: drawerWidth,
        '.MuiDrawer-paper': {
          width: drawerWidth,
          backgroundColor: '#161616',
          color: 'white',
        },
      }}
      variant="temporary"
      anchor="left"
    >
      <List
        sx={{ ml: 3, mt: 1.5, mr: 3, backgroundColor: '#161616', opacity: 0.7 }}
      >
        <StyledCloseIcon
          onClick={() => toggleDrawer()}
          sx={{ cursor: 'pointer' }}
        />
        {NavMenuItems.map((item) => (
          <StyledLink key={item.id} href={item.path}>
            <ListItem
              button
              sx={{
                marginTop: 2,
                borderBottom: '1px solid white',
                paddingLeft: 0,
                paddingBottom: 1.6,
                textDecoration: 'none',
              }}
            >
              <ListItemText>
                <Typography
                  sx={{ color: 'white', ml: 0.5 }}
                  fontWeight={700}
                  fontSize={15}
                  letterSpacing={'.1rem'}
                >
                  {item.text}
                </Typography>
              </ListItemText>
            </ListItem>
          </StyledLink>
        ))}
      </List>
    </Drawer>
  )
}

const StyledCloseIcon = styled(Close)`
  transform: rotate(0deg);
  margin-left: 5px;
  transition: 1s ease;

  &:hover {
    transform: rotate(720deg);
  }
`

const StyledLink = styled(Link)`
  text-decoration: none;
`

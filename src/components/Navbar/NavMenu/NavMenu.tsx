import React from 'react'
import { Close } from '@mui/icons-material'
import { Drawer, List, ListItem, ListItemText, Typography } from '@mui/material'
import { MenuItems } from '../../../data'
import styled from 'styled-components'
import Link from 'next/link'
import { NavMenuProps } from '../Navbar.model'

const drawerWidth = '330px'

export const NavMenu: React.FC<NavMenuProps> = ({ toggleDrawer, open }) => {
  return (
    <Drawer
      onClose={toggleDrawer}
      open={open}
      sx={{
        width: drawerWidth,
        '.MuiDrawer-paper': { width: drawerWidth },
      }}
      variant="temporary"
      anchor="left"
    >
      <List sx={{ ml: 3, mt: 1.5, mr: 3 }}>
        <Close onClick={() => toggleDrawer()} sx={{ cursor: 'pointer' }} />
        {MenuItems.map((item) => (
          <StyledLink key={item.id} href={item.path}>
            <ListItem
              button
              sx={{
                marginTop: 2,
                borderBottom: '1px solid black',
                paddingLeft: 0,
                paddingBottom: 1.6,
                textDecoration: 'none',
              }}
            >
              <ListItemText>
                <Typography
                  sx={{ color: 'black', ml: 0.5 }}
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

const StyledLink = styled(Link)`
  text-decoration: none;
`

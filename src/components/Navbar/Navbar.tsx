import { PersonOutlineOutlined } from '@mui/icons-material'
import MenuIcon from '@mui/icons-material/Menu'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined'
import { Badge } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import Image from 'next/image'

import { NavMenu } from './NavMenu/NavMenu'
import { displayFixedType, NavbarProps } from './Navbar.model'
import { useAppSelector } from '../../redux/store/store'

export const Navbar: React.FC<NavbarProps> = ({ className, homePage }) => {
  const [open, setOpen] = useState(false)
  const cart = useAppSelector((state) => state.cart)

  /* будет переключать мобильное меню при нажатии на значок */
  const toggleDrawer = () => {
    setOpen(open ? false : true)
  }

  const [displayFixed, setDisplayFixed] = useState(false)

  /* если окно на 42 пикселя ниже, панель навигации будет {position: fixed} */
  const handleScroll = () => {
    setDisplayFixed(window.pageYOffset > 5)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <Container className={className} displayFixed={displayFixed}>
      <Wrapper homePage={homePage} displayFixed={displayFixed}>
        <Left>
          <MenuIcon onClick={toggleDrawer} />
          <NavMenu toggleDrawer={toggleDrawer} open={open} />
        </Left>
        <Center>
          <StyledLink aria-label="кнопка вернуться домой" href={'/'}>
            <StyledImage
              src={'/assets/images/basealpha.png'}
              height={35}
              width={80}
              alt="Logo"
            />
          </StyledLink>
        </Center>
        <Right>
          <StyledLink
            aria-label="кнопка для перехода на страницу профиля"
            href={'/api/auth/login'}
          >
            <PersonOutlineOutlined />
          </StyledLink>
          <StyledLink
            aria-label="кнопка перехода на страницу корзины"
            href={'/cart'}
          >
            <Badge badgeContent={cart.quantity} color="primary">
              <ShoppingBagOutlinedIcon />
            </Badge>
          </StyledLink>
        </Right>
      </Wrapper>
    </Container>
  )
}

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`

const StyledImage = styled(Image)`
  width: 100px;
  height: 100px;
  &:hover {
    cursor: pointer;
  }
`

const Center = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;
`

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: inherit;
`

const Wrapper = styled.div<{
  displayFixed: displayFixedType
  homePage: boolean
}>`
  display: flex;
  justify-content: space-between;
  padding: 13px 30px;
  align-items: center;
  border-bottom: 1px solid #dcdcdc;
  z-index: 4;
  width: 100%;
  transition: 300ms ease;
  position: ${(props) => (props.displayFixed ? 'fixed' : '')};
  color: ${(props) =>
    props.homePage ? (props.displayFixed ? 'black' : 'white') : 'black'};
  background: ${(props) =>
    props.homePage ? (props.displayFixed ? 'white' : 'transparent') : 'white'};
  position: fixed;

  &:hover {
    background-color: white;
    color: black;
  }
  .MuiSvgIcon-fontSizeMedium {
    width: 30px;
    height: 30px;
    transition: 300ms ease;
    &:hover {
      opacity: 0.5;
      cursor: pointer;
    }
  }
`

const Container = styled.div<{ displayFixed: displayFixedType }>`
  height: 60px;
  width: 100%;
  @media only screen and (min-width: 1920px) {
    width: 1920px;
    ${Wrapper} {
      width: 1920px;
    }
  }
`

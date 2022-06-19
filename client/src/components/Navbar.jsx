import { Close, PersonOutlineOutlined } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { Badge, Drawer, List, ListItem, ListItemText, Typography, useMediaQuery } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { MenuItems } from '../data';
import Base from '../images/basealpha.png';

const drawerWidth = "330px";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const cartquantity = useSelector((state) => state.cart.quantity);

  const toggleDrawer = () => {
    setOpen(open ? false : true);
  };

  const [show, setShow] = useState();

  let Phones = useMediaQuery("(min-width: 415px)");

  useEffect(() => {
    if (Phones) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, [Phones]);

  const handleScroll = () => {
    setShow(window.pageYOffset > 42);
  };

  return (
    <Container className={`Nav ${show && "Nav__black"}`}>
      <Wrapper className={`Nav ${show && "Nav__black"}`}>
        <Left>
          <MenuIcon
            onClick={toggleDrawer}
            sx={{
              cursor: "pointer",
              fontSize: "32px",
              transition: "700ms ease",
              ":hover": { opacity: 0.7, transition: "700ms ease" },
            }}
          />
          <Drawer
            onClose={toggleDrawer}
            open={open}
            sx={{
              width: drawerWidth,
              ".MuiDrawer-paper": { width: drawerWidth },
            }}
            variant="temporary"
            anchor="left"
          >
            <List sx={{ ml: 3, mt: 1.5, mr: 3 }}>
              <Close onClick={toggleDrawer} sx={{ cursor: "pointer" }} />
              {MenuItems.map((item) => (
                <StyledLink key={item.id} to={item.path}>
                  <ListItem
                    button
                    sx={{
                      mt: 2,
                      borderBottom: "1px solid black",
                      pl: 0,
                      pb: 1.6,
                      textDecoration: "none",
                    }}
                  >
                    <ListItemText>
                      <Typography
                        sx={{ color: "black", ml: 0.5 }}
                        variant="strong"
                        fontWeight={700}
                        fontSize={15}
                        letterSpacing={".1rem"}
                      >
                        {item.text}
                      </Typography>
                    </ListItemText>
                  </ListItem>
                </StyledLink>
              ))}
            </List>
          </Drawer>
        </Left>
        <Center>
          <Link to={"/"}>
            <img style={{ height: 30, cursor: "pointer" }} src={Base} alt="" />
          </Link>
        </Center>
        <Right>
          <Link to={"/profile"}>
            <PersonOutlineOutlined
              sx={{
                color: "black",
                cursor: "pointer",
                fontSize: 27,
                ":hover": {
                  opacity: 0.7,
                  transition: "300ms ease",
                },
              }}
            />
          </Link>
          <Link to={"/cart"}>
            <Badge
              badgeContent={cartquantity}
              color="primary"
              sx={{
                color: "black",
                marginBottom: 0.5,
                transition: "700ms ease",
                ":hover": { opacity: 0.7, transition: "700ms ease" },
              }}
            >
              <ShoppingBagOutlinedIcon
                sx={{ color: "black", cursor: "pointer", fontSize: 25 }}
              />
            </Badge>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  & .Nav {
    z-index: 2;
    background-color: white;
  }

  & .Nav__black {
    top: 0;
    width: 100%;
    position: fixed;
    box-sizing: border-box;
    z-index: 4;
  }

  height: 60px;
  width: 100%;
  background-color: white;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 13px 30px;
  align-items: center;
  border-bottom: 1px solid #dcdcdc;
`;

const Left = styled.div`
  flex: 1;
`;

const Center = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 30px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

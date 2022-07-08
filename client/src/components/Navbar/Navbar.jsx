import { PersonOutlineOutlined } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { Badge } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Base from "../../images/basealpha.png";
import { NavMenu } from "./NavMenu/NavMenu";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const cartquantity = useSelector((state) => state.cart.quantity);

  /* будет переключать мобильное меню при нажатии на значок */
  const toggleDrawer = () => {
    console.log("Toggle drawerWidth");
    setOpen(open ? false : true);
  };

  const [displayFixed, setDisplayFixed] = useState(false);

  /* если окно на 42 пикселя ниже, панель навигации будет {position: fixed} */
  const handleScroll = () => {
    setDisplayFixed(window.pageYOffset > 42);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Container displayFixed={displayFixed}>
      <Wrapper displayFixed={displayFixed}>
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
          <NavMenu toggleDrawer={toggleDrawer} open={open} />
        </Left>
        <Center>
          <Link aria-label="кнопка вернуться домой" to={"/"}>
            <Image
              style={{ height: 30, cursor: "pointer" }}
              src={Base}
              alt="Logo"
            />
          </Link>
        </Center>
        <Right>
          <Link
            aria-label="кнопка для перехода на страницу профиля"
            to={"/profile"}
          >
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
          <Link aria-label="кнопка перехода на страницу корзины" to={"/cart"}>
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

const Left = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
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

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 13px 30px;
  align-items: center;
  border-bottom: 1px solid #dcdcdc;
  z-index: 2;
  background-color: white;
  width: 100%;
  position: ${(props) => (props.displayFixed ? "fixed" : "")};
`;

const Container = styled.div`
  z-index: 2;
  background-color: white;

  height: 60px;
  width: 100%;
  background-color: white;
  position: ${(props) => (props.displayFixed ? "fixed" : "")};

  @media only screen and (min-width: 1920px) {
    width: 1920px;
    ${Wrapper} {
      width: 1920px;
    }
  }
`;

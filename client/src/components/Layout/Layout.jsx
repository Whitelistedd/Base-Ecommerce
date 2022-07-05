import React from "react";
import { Announcement } from "../Announcement/Announcement";
import { Navbar } from "../Navbar/Navbar";
import { Footer } from "../Footer/Footer";
import styled from "styled-components";

export const Layout = ({ children }) => {
  return (
    <Container>
      <Wrap>
        <Announcement />
        <Navbar />
        {children}
        <Footer />
      </Wrap>
    </Container>
  );
};

const Wrap = styled.div`
  width: 1920px;
`;

const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

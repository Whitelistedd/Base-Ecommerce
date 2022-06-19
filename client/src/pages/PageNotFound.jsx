import React from 'react';
import styled from 'styled-components';

import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';

export const PageNotFound = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Title>404</Title>
        <Desc>The page you are looking for cannot be found.</Desc>
        <Button>BACK TO HOMEPAGE</Button>
      </Container>
      <Footer />
    </>
  );
};

const Container = styled.div`
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  gap: 1em;
  color: #979696;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1``;

const Desc = styled.p``;

const Button = styled.button`
  padding: 0.7em 1.7em;
  outline: none;
  border: none;
  background-color: rgb(40, 40, 40);
  color: white;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  height: 49px;
  letter-spacing: 3px;
  opacity: 1;
  transition: 400ms ease;
  &:hover {
    opacity: 0.9;
    transition: 400ms ease;
    cursor: pointer;
  }
`;

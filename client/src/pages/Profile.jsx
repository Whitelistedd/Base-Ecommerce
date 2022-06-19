import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import styled from 'styled-components';

import { Announcement } from '../components/Announcement';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import { devices } from '../data';

export const Profile = () => {
  const { logout } = useAuth0();

  return (
    <>
      <Announcement />
      <Navbar />
      <Container>
        <RegisterContainer>
          <Button onClick={() => logout()}>logout</Button>
        </RegisterContainer>
      </Container>
      <Footer />
    </>
  );
};

const Container = styled.div`
  display: flex;
  height: 89vh;
  justify-content: center;
  align-items: center;
  background-color: white;
  font-family: sans-serif;
`;

const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
  min-width: 400px;
  text-align: center;
  height: 45%;
  @media only screen and (max-width: ${devices.Tablet}px) {
    min-width: 200px;
  }
`;

const Button = styled.button`
  background-color: #282828;
  border: none;
  padding: 15px 20px;
  color: #fff;
  padding: 14px 28px;
  font-size: 15px;
  letter-spacing: 0.2em;
  font-weight: 700;
  cursor: pointer;
  margin-top: 10px;
`;

import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Navigate } from "react-router-dom";
import styled from "styled-components";

import { Layout } from "../components/Layout/Layout";
import { devices } from "../data";
import { Loading } from "./Loading";

export const Login = () => {
  const { loginWithRedirect, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Layout>
      <Container>
        <LoginContainer>
          {!isAuthenticated ? loginWithRedirect() : <Navigate to="/profile" />}
        </LoginContainer>
      </Container>
    </Layout>
  );
};

const Container = styled.div`
  display: flex;
  height: 80vh;
  justify-content: center;
  align-items: center;
  background-color: white;
  font-family: sans-serif;
`;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 400px;
  text-align: center;
  @media only screen and (max-width: ${devices.mobile}px) {
    min-width: 200px;
  }
`;

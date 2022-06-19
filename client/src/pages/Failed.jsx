import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import multiply from '../images/multiply.svg';

export const Failed = () => {
  let navigate = useNavigate();

  useEffect(() => {
    const Redirect = () => {
      navigate("/", { replace: true });
    };
    const interval = setInterval(Redirect, 5000);

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <>
      <Container>
        <Wrap>
          <Image src={multiply} />
          <Title>Упс! Что-то пошло не так</Title>
        </Wrap>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.2em;
`;

const Image = styled.img`
  width: 5vw;
`;

const Title = styled.h1`
  font-weight: 500;
  margin: 0px;
  font-size: 2rem;
  margin-bottom: 0.5em;
`;

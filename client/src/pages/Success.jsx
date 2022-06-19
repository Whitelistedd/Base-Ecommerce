import React from 'react';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import SuccessSVG from '../images/check-mark.svg';

export const Success = () => {
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
          <Image src={SuccessSVG} />
          <Title>Спасибо за покупку нашей продукции.</Title>
          <InfoWrap>
            <Info>
              <Anchor to={"/"}>Return Home</Anchor>
            </Info>
            <Info>You will be redirected in 5 seconds</Info>
          </InfoWrap>
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

const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5em;
`;

const Title = styled.h1`
  font-weight: 500;
  margin: 0px;
  font-size: 2rem;
  margin-bottom: 0.5em;
`;

const Info = styled.p`
  margin: 0px;
  color: black;
  font-size: 1.4rem;
  margin-bottom: 1em;
`;

const Anchor = styled(Link)`
  color: black;
`;

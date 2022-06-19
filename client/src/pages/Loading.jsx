import React from 'react';
import styled from 'styled-components';

import loader from '../images/332-loader-3.webp';

export const Loading = ({ className }) => {
  return (
    <>
      <Container className={className}>
        <Wrap>
          <Image src={loader} />
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
  width: 100vw;
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.2em;
  width: 100%;
`;

const Image = styled.img`
  width: 15vw;
`;

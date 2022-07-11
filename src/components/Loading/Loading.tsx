import React from 'react';
import styled from 'styled-components';
import Image from "next/image"

import { LoadingProps } from './Loading.model';

export const Loading : React.FC<LoadingProps> = ({ className }) => {
  return (
    <>
      <Container className={className}>
        <Wrap>
          <StyledImage src={'../images/332-loader-3.webp'} />
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

const StyledImage = styled(Image)`
  width: 15vw;
`;

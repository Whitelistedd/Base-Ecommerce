import React from "react";
import styled from "styled-components";
import Image from "next/image"

export const Failed : React.FC = () => {
  return (
    <>
      <Container>
        <Wrap>
          <StyledImage src={`../images/multiply.svg`} />
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

const StyledImage = styled(Image)`
  width: 5vw;
`;

const Title = styled.h1`
  font-weight: 500;
  margin: 0px;
  font-size: 2rem;
  margin-bottom: 0.5em;
`;

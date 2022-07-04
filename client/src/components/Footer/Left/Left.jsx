import { Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";

export const Left = () => {
  return (
    <Container>
      <Title>О магазине</Title>
      <Typography
        variant="p"
        letterSpacing={"normal"}
        fontSize={15}
        sx={{ color: "rgb(157, 157, 157)", mb: 1, mt: 1 }}
      >
        После того, как мы были разочарованы тем, что не смогли найти подходящие
        высококачественные предметы первой необходимости по разумной цене, мы
        решили взять дело в свои руки.
      </Typography>
      <Typography>Подписывайтесь на нас</Typography>
      <SocialContainer>
        <A href="https://vk.com" target={"#blank"}>
          <i className="fa-brands fa-lg fa-vk"></i>
        </A>
        <A href="https://www.instagram.com" target={"#blank"}>
          <i className="fa-brands fa-lg fa-instagram"></i>
        </A>
      </SocialContainer>
    </Container>
  );
};

const Title = styled.div`
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  height: 21.4375px;
  letter-spacing: 2.6px;
  line-height: 21.45px;
  color: rgb(69, 69, 69);
`;

const SocialContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const A = styled.a`
  color: black;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 460px;
  line-height: 24px;
  gap: 1em;
  @media (max-width: 1134px) {
    flex-basis: 280px;
  }
`;

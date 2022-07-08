import React from "react";
import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";

import imageSRC from "../../images/background.webp";
import { devices } from "../../data";

export const Popup = ({ ClosePopup }) => {
  return (
    <Container>
      <CloseIcon
        onClick={() => ClosePopup()}
        sx={{
          bgcolor: "white",
          borderRadius: "50%",
          fontSize: "2em",
          "&:hover": { cursor: "pointer", opacity: 0.8 },
        }}
      />
      <PopupWrap>
        <Image src={imageSRC} />
        <Info>
          <Title>НОВОСТНАЯ РАССЫЛКА</Title>
          <Desc>
            Подпишитесь на нашу рассылку, чтобы получать бесплатные купоны и
            новости о наших продуктах
          </Desc>
          <NewsLetterWrap onSubmit={() => ClosePopup()}>
            <Input type="email" required placeholder="Эл. почта" />
            <Button type="submit">Подписываться</Button>
          </NewsLetterWrap>
        </Info>
      </PopupWrap>
    </Container>
  );
};

const Button = styled.button`
  width: 200px;
  padding: 1em;
  font-size: 1em;
  border: 0px;
  color: white;
  font-weight: 700;
  letter-spacing: 1px;
  background-color: #282828;
`;

const Input = styled.input`
  padding: 1em;
  border: 1px solid #cccccc;
  border-radius: 10px;
  font-size: 0.9em;
`;

const NewsLetterWrap = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

const Desc = styled.p`
  font-size: 1em;
`;

const Title = styled.h1`
  font-size: 2em;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2em;
  padding: 1em;
  flex: 2;
`;

const Image = styled.img`
  width: 50%;
  height: 100%;
  flex: 1;
  object-fit: cover;
  border-radius: 10px 0px 0px 10px;
`;

const PopupWrap = styled.div`
  background-color: white;
  width: 50%;
  min-width: 960px;
  height: 50%;
  display: flex;
  font-family: "Golos";
  box-shadow: 5px 5px 30px black;
  border-radius: 10px;
`;

const Container = styled.div`
  position: fixed;
  height: 100%;
  min-height: 600px;
  width: 100%;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1em;
  background-color: #0000004e;

  @media only screen and (max-width: ${devices.Desktop}px) {
    ${PopupWrap} {
      min-width: 800px;
      font-size: 13px;
    }
  }
  @media only screen and (max-width: ${devices.Tablet}px) {
    ${PopupWrap} {
      min-width: 500px;
      font-size: 10px;
    }
  }
  @media only screen and (max-width: ${devices.Phone}px) {
    ${PopupWrap} {
      min-width: 360px;
      height: 300px;
      font-size: 5px;
    }

    ${Info} {
      width: 100px;
    }
    ${Button} {
      width: 100%;
    }
  }
`;

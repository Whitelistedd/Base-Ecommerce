import { CopyrightOutlined } from "@mui/icons-material";
import { Typography } from "@mui/material";
import styled from "styled-components";
import { devices } from "../../../data";
import Payments from "../../../images/payments.svg";

export const Copyright = () => {
  return (
    <Container>
      <CopyrightLeft>
        <CopyrightOutlined sx={{ fontSize: 15 }} />
        <Typography sx={{ fontSize: 13 }} variant="span">
          Volxen
        </Typography>
      </CopyrightLeft>
      <CopyrightRight>
        <Image
          alt="способы оплаты: Visa, MasterCard, МИР, СБП"
          src={Payments}
        />
      </CopyrightRight>
    </Container>
  );
};

const Image = styled.img`
  width: 180px;
  height: 35px;
`;

const CopyrightRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CopyrightLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  flex-direction: row;
  align-items: center;
  margin-top: 80px;
  padding: 0 80px;
  @media only screen and (max-width: ${devices.Tablet}px) {
    padding: 0 30px;
  }

  @media only screen and (max-width: ${devices.Phone}px) {
    flex-direction: column;
  }
`;

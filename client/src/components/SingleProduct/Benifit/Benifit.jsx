import styled from "styled-components";
import { devices } from "../../../data";

export const Benifit = ({ icon, title }) => {
  return (
    <Benifits>
      <BeiniftsIMG src={icon} />
      <Perks>{title}</Perks>
    </Benifits>
  );
};

const Perks = styled.span`
  font-size: 1em;
`;

const BeiniftsIMG = styled.img`
  width: 1vw;
`;

const Benifits = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
  @media only screen and (max-width: ${devices.Tablet}px) {
    margin-top: 15px;
    ${BeiniftsIMG} {
      width: 4vw;
    }
    ${Perks} {
      font-size: 1em;
    }
  }
`;

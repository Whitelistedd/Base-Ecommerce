import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { CheckOutCart } from '../components/Cart/CheckOutCart';
import { Form } from '../components/Form';
import { devices } from '../data';

export const Checkout = () => {
  const cart = useSelector((state) => state.cart);
  const [shipping, setShipping] = useState(500);
  const cartquantity = cart.quantity;

  let navigate = useNavigate();

  useEffect(() => {
    if (cartquantity === 0) {
      navigate("/", { replace: true });
    }
  }, [cartquantity]);

  return (
    <Container>
      <Left>
        <Form setShipping={setShipping} cart={cart} />
      </Left>
      <CheckOutCart shipping={shipping} cart={cart} />
    </Container>
  );
};

const Left = styled.div`
  display: flex;
  padding-top: 4em;
  padding-right: 4em;
  width: 100%;
  flex-direction: column;
  flex: 1;
  align-items: flex-end;
  border: 1px solid #e1e1e1;
`;

const Container = styled.div`
  display: flex;
  width: 100vw;
  min-height: 100vh;
  @media only screen and (max-width: ${devices.Tablet}px) {
    flex-direction: column-reverse;
    gap: 2em;
    ${Left} {
      align-items: center;
      padding-right: 0em;
    }
  }
`;

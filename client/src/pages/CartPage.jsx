import React from 'react';

import { Announcement } from '../components/Announcement';
import { Cart } from '../components/Cart/Cart';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';

export const CartPage = () => {
  return (
    <>
      <Announcement />
      <Navbar />
      <Cart />
      <Footer />
    </>
  );
};

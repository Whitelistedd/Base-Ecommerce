import React from 'react';

import { Announcement } from '../components/Announcement';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';
import { Product } from '../components/SingleProduct/Product';

export const SingleProduct = () => {
  return (
    <>
      <Announcement />
      <Navbar />
      <Product />
      <Footer />
    </>
  );
};

import React from "react";
import { Announcement } from "../Announcement/Announcement";
import { Navbar } from "../Navbar/Navbar";
import { Footer } from "../Footer/Footer";

export const Layout = ({ children }) => {
  return (
    <>
      <Announcement />
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

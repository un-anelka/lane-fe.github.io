import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../navbar/Navbar";

function Layout({ children }) {
  return (
    <div className="">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;

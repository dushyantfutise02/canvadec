import React from "react";
import Header from "./Header.jsx";
import { Outlet } from "react-router-dom";
import Footer from "./Footer.jsx";

const Layout = () => {
  return (
    <div>
      <Header />
      <div className="h-auto min-h-105 px-25">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;

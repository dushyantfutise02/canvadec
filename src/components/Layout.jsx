import React from "react";
import Header from "./Header.jsx";
import { Outlet } from "react-router-dom";
import Footer from "./Footer.jsx";

const Layout = () => {
  return (
    <div className="flex flex-col">
      <div>
        <Header className=""/>
      </div>
      <div className="h-auto min-h-105 px-35 mt-22">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;


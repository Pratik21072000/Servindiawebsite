import React from "react";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";
import { Outlet } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="bg-white min-h-screen">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default HomePage;

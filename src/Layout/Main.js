import React from 'react';
import { Outlet } from "react-router-dom";
import Footer from "../components/shared/footer/Footer";
import Header from "../components/shared/header/Header";


const Main = () => {
  
  return (
    <div>
      <Header></Header>
      <div style={{ minHeight: "100vh" }}>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
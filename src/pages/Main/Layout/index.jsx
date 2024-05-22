import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Home";
import LifeService from "../LifeService";
import Shop from "../Shop";
import User from "../User";
import BottomNav from "../../../components/BottomNav";

const Layout = () => {
  return (
    <div>
      <BottomNav></BottomNav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/life" element={<LifeService />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/user" element={<User />}></Route>
      </Routes>
    </div>
  );
};

export default Layout;

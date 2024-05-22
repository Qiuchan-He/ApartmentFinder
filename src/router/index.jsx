import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "../pages/Main/Layout";
import City from "../pages/City";
import Search from "../pages/Search";
import Details from "../pages/Details";
import Login from "../pages/Login";
import Order from "../pages/Order";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/city" element={<City />}></Route>
        <Route path="/details/:id" element={<Details />}>
          {" "}
        </Route>
        <Route path="/login" element={<Login />}>
          {" "}
        </Route>
        <Route path="/search/:keywords" element={<Search />}></Route>
        <Route path="/order" element={<Order />}></Route>
        <Route path="/*" element={<Layout />}></Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;

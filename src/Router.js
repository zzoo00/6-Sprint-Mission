import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import MarketPage from "./pages/market/Index";
import AddItem from "./pages/market/Add_item";
import Login from "./pages/user/Login";

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/items" element={<MarketPage />} />
        <Route path="/additem" element={<AddItem />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default Router;

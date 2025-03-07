import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "../components/LoginPage";
import Signup from "../components/SignUpPage";
import HomePage from "../pages/HomePage";

function AppNavigation() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>

        <Route path="/signin" element={<Signup />}></Route>
      </Routes>
    </div>
  );
}

export default AppNavigation;

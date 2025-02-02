import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Home from "../Pages/Home";
import Cart from "../Cart";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Notification from "../Notification";
import StepperForm from "../StepperForm";

function Auth({ setToken }) {
  const token = localStorage.getItem("token");
  console.log(token, "token----------------");

  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate("/");
    } else {
      navigate("/signIn");
    }
  }, [token]);

  return (
    <AuthStyle>
      <Routes>
        <Route path="/signIn" element={<SignIn setToken={setToken} />} />
        <Route path="/signUp" element={<SignUp setToken={setToken} />} />
        <Route path="/" element={<Home />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<StepperForm />} />
      </Routes>
    </AuthStyle>
  );
}
const AuthStyle = styled.div``;

export default Auth;

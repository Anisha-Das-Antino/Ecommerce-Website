import React, { useEffect } from "react";
import { Route, Routes ,useNavigate} from "react-router-dom";
import styled from "styled-components";
import Home from "../../Pages/Home";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

function Auth({ setToken }) {

    const navigate = useNavigate();

    useEffect(()=>{
        navigate("/signIn");
    },[]);
    
    return (
        <AuthStyle>
            <Routes>
                <Route path="/signIn" element={<SignIn setToken={setToken} />} />
                <Route path="/signUp" element={<SignUp setToken={setToken} />} />
                <Route path="/" element = {<Home />} />
            </Routes>
        </AuthStyle>
    );
}
const AuthStyle = styled.div`
    
`;


export default Auth;
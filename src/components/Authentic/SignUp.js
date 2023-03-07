import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithGoogle, auth, signInWithFacebook } from "../../Firebase";
import Input from "../Input";
import {
    CardWrapper, CardHeader, CardHeading, CardBody, CardFieldset, CardOptions, CardOptionsItem, CardOptionsNote, CardButton, CardLink
} from "./Styles";
import axios from "axios";


function SignUp({ setToken }) {

    const BASE_URL = "https://92bd-2401-4900-1cbd-9361-15a-499f-f047-837f.in.ngrok.io/auth/signup/";


    const { register, handleSubmit , formState: { errors }} = useForm();
    
    const navigate = useNavigate();

    const submitHandler = async (data) => {
        
        try {
            const response = await axios.post(BASE_URL,
                {
                    username: data.username,
                    email: data.email,
                    password: data.password,
                    c_password: data.ConfirmPassword
                });
            console.log("response");
            console.log(response);
            if (response.data.status === 200){
                navigate("/");
            }
           
        }
        catch (e) {
            console.log(errors);
        }

        console.log(data);
    }


    return (
        <form onSubmit={handleSubmit(submitHandler)}>
            <CardWrapper>
                <CardHeader>
                    <CardHeading>Sign Up</CardHeading>
                </CardHeader>

                <CardBody>
                    <CardFieldset>
                        <Input type="text" name="username" placeholder="User Name" register={register} required/>
                    </CardFieldset>
                    {errors.username && <p className="text-[red] text-[10px]">Please check the User Name</p>}
                    <CardFieldset>
                        <Input type="email" name="email" placeholder="E-mail"
                        pattern='/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/'
                        register={register} required/>
                    </CardFieldset>
                    {errors.email && <p className="text-[red] text-[10px]">Please check the Email</p>}
                    <CardFieldset>
                        <Input type="password" name="password" placeholder="Password"
                        pattern= '/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/'
                        register={register}required />
                    </CardFieldset>
                    {errors.password && <p className="text-[red] text-[10px]">Please check the Password</p>}
                 
                    <CardFieldset>
                        <Input type="password" name="ConfirmPassword" placeholder="Confirm Password" 
                        pattern= '/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/'
                        register={register} required />
                    </CardFieldset>
                    {errors.ConfirmPassword && <p className="text-[red] text-[10px]">Please check the Confirm Password</p>}
                 
                    <CardFieldset>
                        <CardOptionsNote>Or Sign Up With</CardOptionsNote>
                        <CardOptions>
                            <CardOptionsItem>
                                <button onClick={signInWithGoogle}>
                                    <Link to="/">
                                        <FontAwesomeIcon size="2x" icon={faGoogle} style={{"color":"black"}}/>
                                    </Link>
                                </button>

                            </CardOptionsItem>

                            <CardOptionsItem>
                                <button onClick={signInWithFacebook}>
                                    <Link to="/">
                                        <FontAwesomeIcon size="2x" icon={faFacebook} style={{"color":"black"}}/>
                                    </Link>
                                </button>
                            </CardOptionsItem>

                        </CardOptions>


                    </CardFieldset>

                    <CardFieldset>
                        <CardButton type="submit">Sign Up</CardButton>
                    </CardFieldset>

                    <CardFieldset>
                        <Link to="/SignIn">
                            <CardLink >Already have an account ?</CardLink>
                        </Link>
                    </CardFieldset>
                </CardBody>
            </CardWrapper>
        </form>
    );
}

export default SignUp;

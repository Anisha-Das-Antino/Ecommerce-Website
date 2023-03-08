import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import Input from "../Input";
import { signInWithGoogle, signInWithFacebook } from "../../Firebase";
import {
    CardWrapper, CardHeader, CardHeading, CardBody, CardFieldset, CardOptions, CardOptionsItem, CardOptionsNote, CardButton, CardLink
} from "./Styles";
import axios from "axios";

function SignIn({ setToken }) {
    const BASE_URL = "https://92bd-2401-4900-1cbd-9361-15a-499f-f047-837f.in.ngrok.io/auth/login/";


    const { register, handleSubmit , formState: { errors } } = useForm();

    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    console.log({ token });

    const submitHandler = async (data) => {

        try {
            const response = await axios.post(BASE_URL,
                {
                    email: data.email,
                    password: data.password
                });
            console.log("response");
            console.log(response.data.status);
            if (response.data.status === 200) {
                navigate("/");
            }

        }
        catch (e) {
            console.log(errors);
        }

     
        console.log(data);
       
    }
    useEffect(() => {
        localStorage.clear();
    }, [])

    return (
        <form onSubmit={handleSubmit(submitHandler)}   >
            <CardWrapper>
                <CardHeader>
                    <CardHeading>Sign In</CardHeading>
                </CardHeader>

                <CardBody>
                    <CardFieldset>
                        <Input type="email" name="email" placeholder="E-mail"
                        pattern={/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/}
                        register={register}
                        required
                        />
                    </CardFieldset>
                    {errors.email && <p className="text-[red] text-[10px]">Please check the Email</p>}
                    <CardFieldset>
                        <Input type="password" name="password" placeholder="Password" register={register}
                        pattern= {/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/}
                        required
                        minLength={8}
                        />
                    </CardFieldset>
                    {errors.password && <p className="text-[red] text-[10px]">Please check the Password</p>}
                    <CardFieldset>
                        <CardOptionsNote>Or Sign In With</CardOptionsNote>

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
                                        <FontAwesomeIcon size="2x" icon={faFacebook} style={{"color":"black"}} />
                                    </Link>
                                </button>

                            </CardOptionsItem>
                        </CardOptions>

                    </CardFieldset>
                    <CardFieldset>
                        <CardButton type="submit" >Sign In</CardButton>
                    </CardFieldset>
                    <CardFieldset>
                        <Link to="/SignUp">
                            <CardLink >New User ?</CardLink>
                        </Link>
                    </CardFieldset>

                </CardBody>
            </CardWrapper>
        </form>
    );
}

export default SignIn;

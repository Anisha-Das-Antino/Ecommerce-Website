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
import { async } from "q";


function SignUp({ setToken }) {

    const BASE_URL = "https://92bd-2401-4900-1cbd-9361-15a-499f-f047-837f.in.ngrok.io/auth/signup/";


    const { register, handleSubmit } = useForm();
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const submitHandler = async (data) => {
        if (!data.username || !data.email || !data.password || !data.ConfirmPassword) {
            setError("Fill all the fields");
            return;
        }
        setError("");
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
            if (response.data.status == 200){
                navigate("/");
            }
            else {
                alert(response.data.messasge);
            }
        }
        catch (e) {
            console.log("error");
            console.log(error);
        }


        // createUserWithEmailAndPassword(auth, data.email, data.password, data.ConfirmPassword)
        //     .then(res =>
        //         console.log(res)
        //     )
        //     .catch(error =>
        //         console.log(error)
        //     )

        // navigate("/");
        // setValues({ ...values, email: e.target.value })
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
                        <Input type="text" name="username" placeholder="User Name" register={register} />
                    </CardFieldset>
                    <CardFieldset>
                        <Input type="email" name="email" placeholder="E-mail" register={register} />
                    </CardFieldset>

                    <CardFieldset>
                        <Input type="password" name="password" placeholder="Password" register={register} />
                    </CardFieldset>

                    <CardFieldset>
                        <Input type="password" name="ConfirmPassword" placeholder="Confirm Password" register={register} />
                    </CardFieldset>

                    <CardFieldset>
                        <CardOptionsNote>Or Sign Up With</CardOptionsNote>
                        <CardOptions>
                            <CardOptionsItem>
                                <button onClick={signInWithGoogle}>
                                    <Link to="/">
                                        <FontAwesomeIcon size="2x" icon={faGoogle} />
                                    </Link>
                                </button>

                            </CardOptionsItem>

                            <CardOptionsItem>
                                <button onClick={signInWithFacebook}>
                                    <Link to="/">
                                        <FontAwesomeIcon size="2x" icon={faFacebook} />
                                    </Link>
                                </button>
                            </CardOptionsItem>

                        </CardOptions>


                    </CardFieldset>

                    <CardFieldset>
                        <b className="text-s font-sans text-red-600 justify-center flex">{error}</b>
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

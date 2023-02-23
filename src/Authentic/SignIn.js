import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import Input from "../components/Input";
import { auth , provider } from "../Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import {
    CardWrapper, CardHeader, CardHeading, CardBody, CardFieldset, CardOptions, CardOptionsItem, CardOptionsNote, CardButton, CardLink
} from "./Styles";


function SignIn({ setToken }) {
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");

    const { register, handleSubmit } = useForm();
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const submitHandler = (data) => {
        if (!data.email || !data.password) {
            setError("Fill all the fields");
            return;
        }
        setError("");

        signInWithEmailAndPassword(auth, data.email, data.password)
            .then(res => {
                console.log(res);
            })
            .catch(error => {
                console.log(error);
            })
        navigate("/");
        setToken(true);
        console.log(data);
        // console.log("hello works ")
        // const request = {
        //     email_check:data.email,
        //     pass1:data.password
        // }
        // console.log(request);
    }

    return (
        <form onSubmit={handleSubmit(submitHandler)}   >
            <CardWrapper>
                <CardHeader>
                    <CardHeading>Sign In</CardHeading>
                </CardHeader>

                <CardBody>
                    <CardFieldset>
                        <Input type="email" name="email" placeholder="E-mail" register={register} />
                    </CardFieldset>
                    <CardFieldset>
                        <Input type="password" name="password" placeholder="Password" register={register} />
                    </CardFieldset>
                    <CardFieldset>
                        <CardOptionsNote>Or Sign In With</CardOptionsNote>

                        <CardOptions>
                            <CardOptionsItem>
                                <Link to="/">
                                    <FontAwesomeIcon size="2x" icon={faGoogle} />
                                </Link>

                            </CardOptionsItem>

                            <CardOptionsItem>
                                <Link to="/">
                                    <FontAwesomeIcon size="2x" icon={faFacebook} />
                                </Link>
                            </CardOptionsItem>
                        </CardOptions>

                    </CardFieldset>
                    <CardFieldset>
                        <b className="text-s font-sans text-red-600 justify-center flex">{error}</b>
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

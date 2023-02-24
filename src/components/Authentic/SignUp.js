import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithGoogle, auth } from "../../Firebase";
import Input from "../Input";
import {
    CardWrapper, CardHeader, CardHeading, CardBody, CardFieldset, CardOptions, CardOptionsItem, CardOptionsNote, CardButton, CardLink
} from "./Styles";



function SignUp({ setToken }) {
    // const [values, setValues] = useState({
    //     email: "",
    //     password: "",
    // })
    const { register, handleSubmit } = useForm();
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const submitHandler = (data) => {
        if (!data.email || !data.password || !data.ConfirmPassword) {
            setError("Fill all the fields");
            return;
        }
        setError("");

        createUserWithEmailAndPassword(auth, data.email, data.password, data.ConfirmPassword)
            .then(res => {
                console.log(res);
            })
            .catch(error => {
                console.log(error);
            })

        navigate("/");
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
                                <Link to="/">
                                    <FontAwesomeIcon size="2x" icon={faFacebook} />
                                </Link>
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

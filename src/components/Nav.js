import React, { useState } from "react";
import { FaShoppingCart } from 'react-icons/fa';
import { IoMdNotifications } from 'react-icons/io';
import { Link, useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { CartState } from "./context/Context";
import { Badge, Dropdown } from "react-bootstrap";
import "../styles.css"


const Nav = () => {

    const { state: { cart },
        dispatch } = CartState();


    const navigate = useNavigate();

    return (

        <nav className="flex min-h-[10vh] py-[20px] px-[80px]  justify-between items-center bg-[#a0a2a3]  sticky ">

            <div className="text-[1.5rem] font-bold text-black">
                <Link to="/"><h1>ANTINO</h1></Link>
            </div>

            <div>

                <Form className="d-flex">
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                    />
                    <Button type="submit" variant="light">Search</Button>
                </Form>

            </div>

            <div >
                <ul className="flex justify-between items-center px-[2rem] m-auto">
                    <li className="py-0 px-[20px] relative ">
                        <Link>
                            <IoMdNotifications fontSize="25px" />
                        </Link>
                    </li>

                    <li className="py-0 px-[20px] relative justify-between ">
                        <Link to="/cart">
                            <div className="flex">

                                <FaShoppingCart color="black" fontSize="25px" />
                                <Badge >{cart.length}</Badge>
                            </div>
                        </Link>
                        
                    </li>
                    <li>
                        <Button variant="light" type="submit" onClick={() => {
                            navigate("/signIn")
                            localStorage.clear()
                        }}>Sign Out</Button>
                    </li>
                </ul>

            </div>

        </nav >
    )
}

export default Nav;
import React, { useState } from "react";
import { FaShoppingCart } from 'react-icons/fa';
import { IoMdNotifications } from 'react-icons/io';
import { Link, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { CartState } from "./context/Context";
import { Badge, Dropdown } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import "../styles.css"


const Nav = () => {

    const { state: { cart },
        dispatch, productDispatch } = CartState();

    const [menu, setMenu] = useState(false);

    const showMenu = () => setMenu(!menu);

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
                        {/* <Link to="/cart"> */}
                        {/* <Dropdown > */}
                        {/* <div className="flex"> */}
                        {/* <Dropdown.Toggle variant="light" > */}

                        {/* </Dropdown.Toggle> */}

                        {/* <Dropdown.Menu style={{ minWidth: 370, display: "flex-column" }}>
                                    {cart.length > 0 ? (
                                        <>
                                            {cart.map((prod) => (
                                                <span className="cartitem" key={prod.id}>
                                                    <img
                                                        src={prod.img}
                                                        className="cartItemImg"
                                                        alt={prod.title}
                                                    />
                                                    <div className="cartItemDetail  ">
                                                        <span>{prod.title}</span>
                                                        <span> {prod.price.split(".")[0]}</span>
                                                    </div>
                                                    <AiFillDelete
                                                        fontSize="20px"
                                                        style={{ cursor: "pointer" }}
                                                        onClick={() =>
                                                            dispatch({
                                                                type: "REMOVE_FROM_CART",
                                                                payload: prod,
                                                            })
                                                        }
                                                    />
                                                </span>
                                            ))}
                                            <Link to="/cart">
                                                <Button style={{ width: "95%", margin: "0 10px" }}>
                                                    Go To Cart
                                                </Button>
                                            </Link>
                                        </>
                                    ) : (
                                        <span style={{ padding: 10 }}>Cart is Empty!</span>
                                    )}
                                </Dropdown.Menu> */}
                        {/* </div>
                        </Dropdown> */}

                        {/* <Badge style={{ "color": "white" }}>{cart.length}</Badge>
                            <FaShoppingCart fontSize="25px" />

                        </Link> */}
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
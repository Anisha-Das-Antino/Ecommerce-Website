import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { CartState } from "./context/Context";
import "../styles.css";
import styled from "styled-components";
import { useState } from "react";

const Nav = () => {
  const {
    state: { cart },
  } = CartState();

  const [search, setSearch] = useState("");
  
  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search/${search}`);
    setSearch("");
  };

  const navigate = useNavigate();

  return (
    <Naav>
      <div className="text-[1.5rem] font-bold text-black items-center">
        <Link to="/">
          <h1 style={{ color: "black" }}>ANTINO</h1>
        </Link>
      </div>

      <div>
        <Form className="d-flex "  onSubmit={handleSearch} >
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            onChange={(e) => {
              setSearch(e.target.value.toLowerCase());
            }}
          />
          <Button type="search"  variant="light" >
            Search
          </Button>
        </Form>
      </div>

      <div>
        <ul className="flex justify-between items-center px-[2rem] m-auto">
          <li className="py-0 px-[20px] relative ">
            <Link>
              <IoMdNotifications color="black" fontSize="25px" />
            </Link>
          </li>

          <li className="py-0 px-[20px] relative justify-between ">
            <Link to="/cart">
              <div className="flex justify-between ">
                <FaShoppingCart color="black" fontSize="25px" />
                <h3 style={{ color: "black" }}> {cart.length} </h3>
              </div>
            </Link>
          </li>
          <li>
            <Button
              variant="light"
              type="submit"
              onClick={() => {
                navigate("/signIn");
                localStorage.clear();
              }}
            >
              Sign Out
            </Button>
          </li>
        </ul>
      </div>
    </Naav>
  );
};

const Naav = styled.nav`
  display: flex;
  height: 10vh;
  padding: 20px 80px;
  align-items: center;
  background: #a0a2a3;
  justify-content: space-between;

  @media (max-width: 880px) {
    flex-direction:column;
    align-items: center;
    background: #a0a2a3;
    justify-content: space-between;
    height: 30vh;
    
  }
`;

export default Nav;

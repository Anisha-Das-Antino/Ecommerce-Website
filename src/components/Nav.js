import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { CartState } from "./context/Context";
import "../styles.css";
import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";

const Nav = () => {
  const {
    state: { cart },
  } = CartState();
  
  const [text, setText] = useState("");
  console.log("hwjashjas",text)

  // const [url, set]
  const url = `http://127.0.0.1:8000/search/?name=${text}`;
  const urlwithoutText=`http://127.0.0.1:8000/search/`
  console.log(text);
  const [user, setUser] = useState([]);
  const [suggestion, setSuggestion] = useState([]);

  useEffect(() => {
    axios
      .get(text?url:urlwithoutText)
      .then((res) => {
        setUser(res?.data);
      })
      .catch((e) => console.log(e));
  }, []);
  console.log(user);

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search/${text}`);
    setText("");
    setSuggestion([]);
  };

  const onSuggestHandle = (text) => {
    setText(text);
    setSuggestion([]);
  };

  const onChangeHandler = (text) => {
    let matches = [];
    if (text.length > 0) {
      matches = user.filter((usr) => {
        const regex = new RegExp(`${text}`, "gi");
        return usr.product_name.match(regex);
      });
    }
    console.log(matches);
    setSuggestion(matches);
    setText(text);
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
        <div>
          <Form className="d-flex relative" onSubmit={handleSearch}>
            <Form.Control
              type="text"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e) => onChangeHandler(e.target.value)}
              value={text}
              // onBlur={() => {
              //   setTimeout(() => {
              //     setSuggestion([]);
              //   }, 100);
              // }}
            />

            <Button type="search" variant="light">
              Search
            </Button>

            <div className="  bg-[#d8d8d8] absolute mt-[50px] z-[1] rounded-[10px] h-[120px] overflow-auto">
              {suggestion &&
                suggestion.map((suggestion) => (
                  <div
                    key={suggestion.id}
                    onClick={() => onSuggestHandle(suggestion.product_name)}
                    className="cursor-pointer pl-4 hover:bg-[grey] hover:text-white rounded-[7px] w-[200px]   "
                  >
                    {suggestion.product_name}
                  </div>
                ))}
            </div>
          </Form>
        </div>
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
    flex-direction: column;
    align-items: center;
    background: #a0a2a3;
    justify-content: space-between;
    height: 30vh;
  }
`;

export default Nav;

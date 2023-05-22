import React, { useContext } from "react";
import { createContext, useState } from "react";
import Products from "../Products";
import data from "../Pages/data.json";
import { useReducer } from "react";
import Reducers from "./Reducers";

const Cart = createContext();

const Context = ({ children }) => {
  const [products, setProducts] = useState(data);

  const prod = products.map((product, index) => (
    <Products
      id={product.id}
      key={index}
      title={product.title}
      price={product.price}
      button={product.button}
      img={product.img}
    />
  ));

  const [state, dispatch] = useReducer(Reducers, {
    prod: prod,
    cart: [],
  });

  return <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>;
};

export default Context;

export const CartState = () => {
  return useContext(Cart);
};

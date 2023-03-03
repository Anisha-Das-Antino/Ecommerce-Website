import React, { useContext } from 'react'
import { createContext, useState } from 'react';
import Products from '../Products';
import { useReducer } from 'react';
import Reducers from './Reducers';
import charger from "../../utils/charger.json";

const Cart = createContext();

const Context = ({ children }) => {

    const prod = charger.map((product, index) => (
        <Products
            id={product.id}
            key={index}
            title={product.title}
            price={product.price}
            button={product.button}
            img={product.img}
            product = {product}
            company = {product.company}
        />
    ));

    const [state, dispatch] = useReducer(Reducers, {
        prod: prod,
        cart: [],

    })



    return (
        <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>
    );
};


export default Context;

export const CartState = () => {
    return useContext(Cart);
}

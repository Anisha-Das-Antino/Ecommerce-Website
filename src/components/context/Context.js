import React, { useContext } from 'react'
import { createContext, useState } from 'react';
import Products from '../Products';
import { useReducer } from 'react';
import Reducers from './Reducers';

const Cart = createContext();

const Context = ({ children }) => {

    const [state, dispatch] = useReducer(Reducers, {

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

import React, { useState } from "react";
import Nav from "../components/Nav";
import CarouselComponent from "../components/Carousel";
import Products from "../components/Products";
import { useSelector } from "react-redux";
import data from "./data.json";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "../components/Cart";

import styled from "styled-components";
const Home = () => {
    const [products, setProducts] = useState(data);
    // const {products} = useSelector((state) => state.product);
    return (
        <div>

            <Nav />
            <CarouselComponent />

            <Container>
            

            {products.map((product, index) => (
                <Products
                key={index}
                title={product.title}
                price={product.price}
                button={product.button}
                img={product.img}
                />
                ))}

            </Container>


        </div>
    );
}

const Container = styled.div`
    display: flex;
    overflow: scroll;
`

export default Home;

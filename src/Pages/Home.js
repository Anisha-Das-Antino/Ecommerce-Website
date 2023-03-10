import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import CarouselComponent from "../components/Carousel";
import Products from "../components/Products";
import Carousel from "react-elastic-carousel";
import Footer from "../components/Footer";

import headPhone from "../utils/headPhone.json";
import charger from "../utils/charger.json";
import laptop from "../utils/laptop.json";
import mobile from "../utils/mobile.json";
import smartWatch from "../utils/smartWatch.json";
import styled from "styled-components";
import axios from "axios";


const Home = () => {
    // const BASE_URL = "https://a522-2401-4900-1cbd-f9a6-d9c3-2646-5ce8-316.in.ngrok.io/cat/product/";
    // const [data, setData] = useState([]);

    // useEffect(()=>{
    //     axios.get(BASE_URL)
    //     .then((res)=>{
    //         setData(res.data);
    //         console.log(res);
    //     })
    //     .catch((e) => console.log(e))
    // })

    const breakPoints = [
        {width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
        { width: 850, itemsToShow: 3 },
        { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
        { width: 1450, itemsToShow: 5 },
        { width: 1750, itemsToShow: 6 },
    ]

    return (
        <div>
            <Nav />
            <CarouselComponent />

            <Heading>Head Phone</Heading>
            <Carousel breakPoints={breakPoints} >
                {headPhone.map((product, index) => (
                    <Products
                        product={product}
                        id={product.id}
                        key={index}
                        title={product.title}
                        price={product.price}
                        img={product.img}
                        company={product.company}
                        
                    />
                    
                ))}
            </Carousel>
            <Heading>Mobile</Heading>
            <Carousel breakPoints={breakPoints} >
                {mobile.map((product, index) => (
                    <Products
                        product={product}
                        id={product.id}
                        key={index}
                        title={product.title}
                        price={product.price}
                        img={product.img}
                        company={product.company}
                    />
                ))}
            </Carousel>
            <Heading>Charger</Heading>
            <Carousel breakPoints={breakPoints} >
                {charger.map((product, index) => (
                    <Products
                        product={product}
                        id={product.id}
                        key={index}
                        title={product.title}
                        price={product.price}
                        img={product.img}
                        company={product.company}
                    />
                ))}
            </Carousel>
            <Heading>Laptop</Heading>
            <Carousel breakPoints={breakPoints} >
                {laptop.map((product, index) => (
                    <Products
                        product={product}
                        id={product.id}
                        key={index}
                        title={product.title}
                        price={product.price}
                        img={product.img}
                        company={product.company}
                    />
                ))}
            </Carousel>
            <Heading>Smart Watch</Heading>
            <Carousel breakPoints={breakPoints} >
                {smartWatch.map((product, index) => (
                    <Products
                        product={product}
                        id={product.id}
                        key={index}
                        title={product.title}
                        price={product.price}
                        img={product.img}
                        company={product.company}
                    />
                ))}
            </Carousel>


            <Footer />

        </div>
    );
}

const Heading = styled.h1`
    font-size: 2rem;
    font-weight:bold;
    color:#4c88a7;
    margin:2rem;
    padding: 2rem 8rem;

    @media (max-width:550px) {
        margin : 1rem;
        font-size:1.5rem;
        padding:1rem 6rem;
    }

`;




export default Home;

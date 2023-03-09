import React, { useState } from "react";
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


const Home = () => {
    

    const breakPoints = [
        { width: 1, itemsToShow: 3 }
    ]
    return (
        <div>
            <Nav />
            <CarouselComponent />

            <h1 className="font-bold text-[2rem] text-[#4c88a7] m-[2rem] px-[8rem] py-[2rem]">Head Phone</h1>
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
            <h1 className="font-bold text-[2rem] text-[#4c88a7] m-[2rem] px-[8rem] py-[2rem]">Mobile</h1>
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
            <h1 className="font-bold text-[2rem] text-[#4c88a7] m-[2rem] px-[8rem] py-[2rem]">Charger</h1>
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
            <h1 className="font-bold text-[2rem] text-[#4c88a7] m-[2rem] px-[8rem] py-[2rem]">Laptop</h1>
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
            <h1 className="font-bold text-[2rem] text-[#4c88a7] m-[2rem] px-[8rem] py-[2rem]">Smart Watch</h1>
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



export default Home;

import React, { useState } from "react";
import Nav from "../Nav";
import CarouselComponent from "../Carousel";
import Products from "../Products";
import data from "./data.json";
import Carousel from "react-elastic-carousel";
import Footer from "../Footer";
import { CartState } from "../context/Context";

const Home = () => {
    const [products, setProducts] = useState(data);
    // const {products} = useSelector((state) => state.product);
    // const { state: { prod }, } = CartState();
    
    // console.log(prod);
    const breakPoints = [
        { width: 1, itemsToShow: 3 }
    ]
    return (
        <div>

            <Nav />
            <CarouselComponent />

            <Carousel breakPoints={breakPoints} >
                {products.map((product, index) => (
                    <Products
                        product = {product}
                        id={product.id}
                        key={index}
                        title={product.title}
                        price={product.price}
                        button={product.button}
                        img={product.img}
                    />
                ))}
            </Carousel>

            <Footer />

        </div>
    );
}



export default Home;

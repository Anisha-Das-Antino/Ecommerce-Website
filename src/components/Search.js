import React, { useState } from "react";
import product from "../utils/product.json";
import Products from "./Products";
import { useParams } from "react-router-dom";
import Nav from "./Nav";
import Carousel from "react-elastic-carousel";
import Footer from "./Footer";

const Search = () => {
  const { title } = useParams();
  const [products, setProducts] = useState(product);

  console.log(products);

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
    { width: 850, itemsToShow: 3 },
    { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
    { width: 1450, itemsToShow: 5 },
    { width: 1750, itemsToShow: 6 },
  ];

  const filteredProducts = products.filter((prod) => {
    if (prod.title.toLowerCase().includes(title)) {
      return prod;
    }
  });
  console.log(title);

  return (
    <div>
      <Nav />
      <div className="pt-[4rem]">
        <Carousel breakPoints={breakPoints}>
          {filteredProducts.map((product, index) => (
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
      </div>
      <Footer />
    </div>
  );
};

export default Search;

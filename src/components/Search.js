import React, { useEffect, useState } from "react";
import Products from "./Products";
import { useParams } from "react-router-dom";
import Nav from "./Nav";
import Carousel from "react-elastic-carousel";
import Footer from "./Footer";
import axios from "axios";
import { CartState } from "./context/Context";

const Search = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  const { title } = useParams();

  const url = `http://127.0.0.1:8000/search/?name=${title}`;

  const [products, setProducts] = useState([]);
  useEffect(()=>{
    axios
    .get(url)
    .then((res) => {
      setProducts(res?.data);
    })
    .catch((e) => console.log(e));
  },[])
  

    const handleAddToCart = (product_id, product) => {
      console.log({ product_id });
      const email = localStorage.getItem("email");
      const url = `http://127.0.0.1:8000/cart/?id=${product_id}&email=${email}`;
      axios
        .get(url)
        .then((res) => {
          console.log(res);
        })
        .then(
          dispatch({
            type: "ADD_TO_CART",
            payload: product,
          })
        )
        .catch((e) => console.log(e));
    };
  
    const handleRemoveFromCart = (product_id, product) => {
      console.log({ product_id });
      const email = localStorage.getItem("email");
      const url = `http://127.0.0.1:8000/cart/delete/?id=${product_id}&email=${email}`;
      axios
        .delete(url)
        .then((res) => {
          console.log(res);
        })
        .then(
          dispatch({
            type: "REMOVE_FROM_CART",
            payload: product,
          })
        )
        .catch((e) => console.log(e));
    };
  

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
    { width: 850, itemsToShow: 3 },
    { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
    { width: 1450, itemsToShow: 5 },
    { width: 1750, itemsToShow: 6 },
  ];

  const filteredProducts = products.filter((prod) => {
    if (prod.product_name.toLowerCase().includes(title)) {
      return prod;
    }
  });

  return (
    <div>
      <Nav />
      <div className="pt-[4rem]">
        <Carousel breakPoints={breakPoints}>
          {filteredProducts.map((product) => (
            <Products
              product={product}
              id={product?.id}
              key={product?.id}
              title={product?.product_category}
              price={product?.product_price}
              img={product?.product_Image}
              company={product?.product_name}
              handleCart={() => handleAddToCart(product?.id, product)}
                handleRemove={() => handleRemoveFromCart(product?.id, product)}
            />
          ))}
        </Carousel>
      </div>
      <Footer />
    </div>
  );
};

export default Search;

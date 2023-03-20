import React, { useEffect, useState } from "react";
import Products from "./Products";
import { useParams } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
import axios from "axios";
import { CartState } from "./context/Context";
import Pagination from "./Pagination";

const Search = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  const { title } = useParams();
  
  
  
  const url = `http://127.0.0.1:8000/search/?name=${title}`;
  const urlwithoutText=`http://127.0.0.1:8000/search/`

  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    axios
      .get(title?url:urlwithoutText)
      .then((res) => {
        setProducts(res?.data);
      })
      .catch((e) => console.log(e));
  }, [title]);

  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(8);
  

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

  console.log(products.length);

  const lastPostIndex = currentPage * postPerPage;
  const firPostIndex = lastPostIndex - postPerPage;
  const currentPost = products.slice(firPostIndex, lastPostIndex);
  console.log(currentPost,"cc");
  

  return (
    <div>
      <Nav />
      <div className="pt-[4rem] m-auto px-[3%]" >
        
          {currentPost.map((product) => (
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
          <Pagination
            totalPost={products.length}
            postPerPage={postPerPage}
            setCurrentPage={setCurrentPage} 
          />
          
        
      </div>
      <Footer />
    </div>
  );
};

export default Search;

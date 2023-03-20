import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Nav from "./Nav";
import Products from "./Products";
import { CartState } from "./context/Context";
import Pagination from "./Pagination";
import Footer from "./Footer";

const ViewMore = () => {
  const params = useParams();
  console.log(params.code, "=====================");
  const category = params.code.split("_").join(" ") || "";
  console.log({ category });
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(0);
  const [len , setLen] = useState(0);

  const BASE_URL = `http://127.0.0.1:8000/cat/cate/${category}/?page=${currentPage}`;

  const [data, setData] = useState([]);
  console.log(currentPage);

  const {
    state: { cart },
    dispatch,
  } = CartState();

  useEffect(() => {
    axios
      .get(BASE_URL)
      .then((res) => {
        console.log(res?.data?.data);
        setData(res?.data?.data);
        setLen(res?.data?.count);
        setPostPerPage(res?.data?.limit);
      })
      .catch((e) => console.log(e));
  }, [currentPage]);
  console.log({len});

  console.log({ data });

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

  const lastPostIndex = currentPage * postPerPage;
  const firPostIndex = lastPostIndex - postPerPage;
  const currentPost = data.slice(firPostIndex, lastPostIndex);
  console.log(currentPost, "cc");

  return (
    <div>
      <Nav />

      <div className="pt-[3rem] pl-[3rem] m-auto">
        {data &&
          data?.map((product) => (
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
          totalPost={len}
          postPerPage={postPerPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
      <Footer />
    </div>
  );
};

export default ViewMore;

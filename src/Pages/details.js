import React, { useEffect, useState } from "react";
import Rating from "react-rating-stars-component";
import { useParams } from "react-router-dom";
import { CartState } from "../components/context/Context";
import Nav from "../components/Nav";
import { Button } from "react-bootstrap";
import styled from "styled-components";
import Footer from "../components/Footer";
import axios from "axios";

const Details = () => {
  const { id } = useParams();
  const Base_url = `http://127.0.0.1:8000/cat/product/details/?id=${id}`;

  const [product, setProduct] = useState(null);
  const {
    state: { cart },
    dispatch,
  } = CartState();

  console.log({ cart });

  useEffect(() => {
    // const product = data.find((p) => p.id === id);
    axios
      .get(Base_url)
      .then((res) => {
        console.log(res?.data?.product_details);
        setProduct(res?.data?.product_details);
      })
      .catch((e) => console.log(e));
  }, [id]);

  if (!product?.id) {
    return <div>Loading...</div>;
  }
  console.log(product?.product_details?.rating);


  const handleAddToCart = (product_id, product) => {
    console.log({ product_id });

    cart.filter((item) => console.log(item.id === +id));
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

    cart.filter((item) => console.log(item.id === +id));
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

  return (
    <div>
      <Nav />
      <div>
        <Sty>
          <div className="w-[200px] h-[200px] items-center">
            <img src={product?.product_Image} alt="name" />
          </div>

          <div className="justify-between m-[2rem]  ">
            <h2 className="pb-[0.6rem] font-bold text-[23px] ">{product?.product_name}</h2>
            {/* <p className="pb-[1rem] ">{product.company}</p> */}

            <p className="pb-[0.6rem] font-semibold text-[15px]">{product?.product_dic}</p>
            <h3 className="pb-[0.6rem] text-[17px] font-bold">$ {product?.product_price}</h3>

            <Rating
              count={5} // number of rating stars
              value={product?.product_details?.rating} // current rating value
              // onChange={handleRatingChange}  // callback function to handle rating change
              size={24} // size of the rating stars
              activeColor="#ffd700" // color of the active rating stars
            />

            {cart.some((p) => p.id === +id) ? (
              <Button
                variant="danger"
                style={{ color: "black" , paddingTop: "0.6rem"}}
                onClick={() => handleRemoveFromCart(id, product)}
              >
                Remove from cart
              </Button>
            ) : (
              <Button
                type="submit"
                style={{
                  color: "white",
                  backgroundColor: "#e5195f",
                  border: "none",
                }}
                onClick={() => handleAddToCart(id, product)}
                disabled={!id}
              >
                {" "}
                {!id ? "Out of Stock" : "Add to Cart"}{" "}
              </Button>
            )}
          </div>
        </Sty>
      </div>
      <Footer />
    </div>
  );
};

const Sty = styled.div`
  display:flex;
  width: 100%;
  align-items:center;
  gap:20px;
  margin-auto;
  padding-top:10%;
  padding-left:30%;

  @media (max-width:850px){
    padding-left:20%;
  }
  @media (max-width:650px){
    padding-left:10%;
  }
  @media (max-width:520px){
   flex-direction:column;
  }
`;

export default Details;

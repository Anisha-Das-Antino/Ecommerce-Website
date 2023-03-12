import React, { useEffect, useState } from "react";
import Rating from 'react-rating-stars-component';
import { useParams } from "react-router-dom";
import { CartState } from "../components/context/Context";
import data from "../utils/product";
import Nav from "../components/Nav";
import { Button } from "react-bootstrap";
import styled from "styled-components";
import Footer from "../components/Footer";

const Details = () => {
  const { id } = useParams();
  
  const [product, setProduct] = useState(null);
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const {
    state: { cart },
    dispatch,
  } = CartState();

  useEffect(() => {
    const product = data.find((p) => p.id === id);
    setProduct(product);
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const handleRatingChange = (value) => {
    setRating(value);
  };

  const handleHoverRatingChange = (value) => {
    setHoverRating(value);
  };

  const handleRatingSubmit = () => {
    console.log(`Submitting rating ${rating} for product ID ${id}`);
    // You can implement your logic for submitting the rating here
  };

  return (
    <div>
      <Nav />
      < div>
        <Sty >
          <div >
            <img
              src={product.img}
              alt="name"
            />
          </div>

          <div className="justify-between m-[2rem]  ">
             
            <h2 className="pb-[1rem] font-semibold">{product.title}</h2>
            <p className="pb-[1rem] ">{product.company}</p>
            
            <p className="pb-[1rem]" >{product.desc}</p>
            <h3 className="pb-[1rem] font-bold">$ {product.price}</h3>
            <Rating
                count={5}  // number of rating stars
                value={product.rating}  // current rating value
                onChange={handleRatingChange}  // callback function to handle rating change
                size={24}  // size of the rating stars
                activeColor="#ffd700"  // color of the active rating stars
            />

            {cart.some((p) => p.id === id) ? (
              <Button
                variant="danger"
                style={{ color: "black" }}
                onClick={() => {
                  dispatch({
                    type: "REMOVE_FROM_CART",
                    payload: product,
                  });
                }}
              >
                Remove from cart
              </Button>
            ) : (
              <Button
                type="submit"
                style={{
                  color: "black",
                  backgroundColor: "#e5195f",
                  border: "none",
                }}
                onClick={() => {
                  dispatch({
                    type: "ADD_TO_CART",
                    payload: product,
                  });
                }}
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
}

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
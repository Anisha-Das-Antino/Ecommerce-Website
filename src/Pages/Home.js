import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
import CarouselComponent from "../components/Carousel";
import Products from "../components/Products";
import Carousel from "react-elastic-carousel";
import Footer from "../components/Footer";
import styled from "styled-components";
import axios from "axios";
import { CartState } from "../components/context/Context";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const BASE_URL = "http://127.0.0.1:8000/cat/category/";
  const navigate = useNavigate();
  const {
    state: { cart },
    dispatch,
  } = CartState();

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(BASE_URL)
      .then((res) => {
        console.log(res?.data?.data);
        setData(res?.data?.data);
      })
      .catch((e) => console.log(e));
  }, []);
  console.log({ data });

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
    { width: 850, itemsToShow: 3 },
    { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
    { width: 1450, itemsToShow: 5 },
    { width: 1750, itemsToShow: 6 },
  ];
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

  return (
    <div>
      <Nav />
      <CarouselComponent />

      {data && <Heading>{data[0]?.category}</Heading>}
      <Container>
        <Carousel breakPoints={breakPoints}>
          {data &&
            data[0]?.product_details?.slice(0,6)?.map((product) => (
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
       
        <Button className="viewMore" onClick={()=> navigate(`/view_more/${data[0]?.category?.split(" ").join("_")}`)}>View More</Button>
        
      </Container>

      {data && <Heading>{data[1]?.category}</Heading>}
      <Container>
        <Carousel breakPoints={breakPoints}>
          {data &&
            data[1]?.product_details?.slice(0,6)?.map((product) => (
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

        <Button className="viewMore" onClick={()=> navigate(`/view_more/${data[1]?.category?.split(" ").join("_")}`)}>View More</Button>
      </Container>

      {data && <Heading>{data[2]?.category}</Heading>}
      <Container>
        <Carousel breakPoints={breakPoints}>
          {data &&
            data[2]?.product_details?.slice(0,6)?.map((product) => (
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

        <Button className="viewMore" onClick={()=> navigate(`/view_more/${data[2]?.category?.split(" ").join("_")}`)}>View More</Button>
      </Container>

      {data && <Heading>{data[3]?.category}</Heading>}
      <Container>
        <Carousel breakPoints={breakPoints}>
          {data &&
            data[3]?.product_details?.slice(0,6)?.map((product) => (
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

        <Button className="viewMore" onClick={()=> navigate(`/view_more/${data[3]?.category?.split(" ").join("_")}`)}>View More</Button>
      </Container>

      {data && <Heading>{data[4]?.category}</Heading>}
      <Container>
        <Carousel breakPoints={breakPoints}>
          {data &&
            data[4]?.product_details?.slice(0,6)?.map((product) => (
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

        <Button className="viewMore" onClick={()=> navigate(`/view_more/${data[4]?.category?.split(" ").join("_")}`)}>View More</Button>
      </Container>

      <Footer />
    </div>
  );
};

const Heading = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: #4c88a7;
  margin: 1rem;
  padding: 1.5rem 7rem;

  @media (max-width: 550px) {
    margin: 1rem;
    font-size: 1.5rem;
    padding: 1rem 6rem;
  }
`;

const Container = styled.div`
  position: relative;
  .viewMore {
    position: absolute;
    top: 87%;
    left: 50%;
    color: white;
    background: #e5195f;
    border: none;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    @media (max-width: 987px) {
      top: 93%;
    }
    @media (max-width: 669px) {
      top: 86%;
    }
  }
`;

export default Home;

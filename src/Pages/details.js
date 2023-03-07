import axios from "axios";
import React, { useEffect, useState } from "react";
import Nav from "../components/Nav";
// import { useParams } from 'react-router-dom';
import { Button } from "react-bootstrap";
import { CartState } from "../components/context/Context";

const Details = ({product, id}) => {
  console.log(id);
  console.log(product);
  // let currentUrl = window.location.href;
  // let currentId = currentUrl.split("/").slice(-1)[0];

  // useEffect(() => {
  //   console.log("currentUrl ", currentUrl, currentId);
  // }, []);


  const {
    state: { cart },
    dispatch,
  } = CartState();

  // const {id} = useParams();
  // const url = "";
  // useEffect(async ()=>{
  //     try{
  //         const res = await axios.get(`${url}?id=${id}`);
  //         console.log(res);
  //     }
  //     catch(error) {
  //         console.log(error);
  //     }
  // }[])

  return (
    <div>
      <Nav />
      <div className="flex">
        <div className="w-[100%] px-[12rem] py-[8.5rem] m-auto flex">
          <div className="w-[30%] h-[30%]" >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqMOLMzCq8J6Wn7k7itOzxwBpJhSpomP8Dlg&usqp=CAU"
              alt="name"
            />
          </div>

          <div className="justify-between m-[2rem]  ">
             
            <h2 className="pb-[1rem] font-semibold">Name</h2>
            <p className="pb-[1rem] ">Category : Category</p>
            
            <p className="pb-[1rem]" >   Description gvdcysxuijbhhdcbvchbdhcbshsdbchj cjvdbcjsdc</p>
            <h3 className="pb-[1rem] font-bold">price</h3>

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
        </div>
      </div>
    </div>
  );
}

export default Details;

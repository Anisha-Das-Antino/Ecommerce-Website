import React, { useState, useEffect } from 'react';
import { CartState } from "./context/Context";
import { Image, ListGroup, Button, Row, Col, Form } from 'react-bootstrap';
import "../styles.css";
import { AiFillDelete, AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Nav from './Nav';

const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  const [total, setTotal] = useState();
  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);

  const handleQtyChange = (product, qty) => {
    if (qty === 0) {
      dispatch({
        type: "REMOVE_FROM_CART",
        payload: product,
      })
    } else {
      dispatch({
        type: "CHANGE_CART_QTY",
        payload: {
          id: product.id,
          qty: qty,
        },
      })
    }
  }

  return (
    <div>
      <Nav />
      <div className='home'>
        <div className='productContainer'>
          <ListGroup>
            {cart.map((product) => (
              <ListGroup.Item key={product.id}>
                <Row>
                  <Col md={2}>
                    <Image src={product.img} alt={product.company} fluid rounded />
                  </Col>
                  <Col md={2}>
                    <span>{product.company}</span>
                  </Col>
                  <Col md={2}>
                    <span>$ {product.price}</span>
                  </Col>
                  <Col md={2}>
                    <div className='d-flex align-items-center'>
                      <Button
                        variant='light'
                        className='qtyBtn'
                        onClick={() => handleQtyChange(product, product.qty - 1)}
                      >
                        <AiOutlineMinus />
                      </Button>
                      <span className='qty'>{product.qty}</span>
                      <Button
                        variant='light'
                        className='qtyBtn'
                        onClick={() => handleQtyChange(product, product.qty + 1)}
                        disabled={product.qty === product.inStock}
                      >
                        <AiOutlinePlus />
                      </Button>
                    </div>
                  </Col>
                  <Col md={2}>
                    <span>$ {Number(product.price) * product.qty}</span>
                  </Col>
                  <Col md={2}>
                    <Button
                      type="button"
                      variant="light"
                      onClick={() =>
                        dispatch({
                          type: "REMOVE_FROM_CART",
                          payload: product,
                        })
                      }
                    >
                      <AiFillDelete fontSize="20px" />
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </div>
        <div className='filters summary'>
          <span className='title'> Subtotal ({cart.length}) items</span>
          <span style={{ fontWeight: 700, fontSize: 20 }}>Total $ {total}</span>
          <Link to="/cart/personalDetails">
            <Button type='button' disabled={cart.length === 0} > Proceed to Checkout</Button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Cart;
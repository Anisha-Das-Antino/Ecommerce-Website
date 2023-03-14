import React, { useEffect, useState } from "react";
import { CartState } from "./context/Context";
import { Row, Col, ListGroup, Button } from "react-bootstrap";
import { useRazorpay } from "react-razorpay";
import Nav from "./Nav";
import Footer from "./Footer";

const Payment = () => {
  const { state } = CartState();
  const [totalAmount, setTotalAmount] = useState(0);
  const [orderId, setOrderId] = useState("");
  const razorpay = useRazorpay();

  useEffect(() => {
    setTotalAmount(
      state.cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [state.cart]);

  const generateOrder = async () => {
    // Replace this with your server-side code to generate an order ID
    const response = await fetch("", {
      method: "POST",
      body: JSON.stringify({
        amount: totalAmount,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    setOrderId(data.orderId);
    return data.orderId;
  };

  const handlePayment = async () => {
    const options = {
      key: "rzp_test_RvZMKKMeb2v3et",
      amount: totalAmount * 100, // Razorpay accepts amount in paisa
      currency: "INR", // Replace with your currency code
      name: "My Store",
      description: "Payment for order",
      order_id: orderId,
      handler: function (response) {
        alert(response.razorpay_payment_id);
      },
      prefill: {
        name: "Muskan",
        email: "muskan.k@antino.io",
      },
    };

    razorpay.open(options);
  };

  return (
    <div>
      <Nav />
      <div className="home">
        <div className="productContainer">
          <ListGroup>
            {state.cart.map((product) => (
              <ListGroup.Item key={product.id}>
                <Row>
                  <Col md={4}>
                    <span>{product.company}</span>
                  </Col>
                  <Col md={4}>
                    <span>${product.price}</span>
                  </Col>
                  <Col md={4}>
                    <span>Qty: {product.qty}</span>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </div>
        <div className="filters summary">
          <span className="title"> Subtotal ({state.cart.length}) items</span>
          <span style={{ fontWeight: 700, fontSize: 20 }}>
            Total ${totalAmount}
          </span>
          <Button type="button" onClick={generateOrder}>
            {" "}
            Generate Order{" "}
          </Button>
          {orderId && (
            <Button type="button" onClick={handlePayment}>
              {" "}
              Proceed to Payment{" "}
            </Button>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Payment;
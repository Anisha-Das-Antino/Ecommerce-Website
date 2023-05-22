import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { CartState } from "./context/Context";

const Products = ({ product, id, img, title, price, button }) => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  return (
    <div id={id} className="inline-block px-[1.5rem] pb-[4rem] ">
      <Card
        style={{
          width: "18rem",
          height: "100%",
          border: "1px solid #ccc",
          padding: "1rem",
        }}
      >
        <Card.Img
          variant="top"
          src={img}
          style={{ height: "25rem", objectFit: "cover" }}
        />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text
            style={{ fontWeight: "bolder", color: "#4e4246", padding: "10px" }}
          >
            ₹ {price}
          </Card.Text>

          <div className="flex justify-between">
            <Button
              type="submit"
              style={{
                color: "black",
                backgroundColor: "#e5195f",
                border: "none",
                fontSize: "0.8rem",
                padding: "0.5rem 1rem",
              }}
            >
              {button}
            </Button>
            {cart.some((p) => p.id === id) ? (
              <Button
                variant="danger"
                style={{
                  color: "black",
                  fontSize: "0.8rem",
                  padding: "0.5rem 1rem",
                }}
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
                  fontSize: "0.8rem",
                  padding: "0.5rem 1rem",
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
        </Card.Body>
      </Card>
    </div>
  );
};

export default Products;

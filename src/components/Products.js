import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import { CartState } from "./context/Context";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Products = ({ id, img, price, company,handleCart ,handleRemove}) => {

  const {
    state: { cart },
    dispatch, 
  } = CartState();
  const navigate = useNavigate();
  // console.log(cart.some((p) => p.id === id))



  return (
    <div id={id} className="inline-block px-[1rem] pb-[4rem]  ">
      <Card >
        <Card.Img style={{width: "260px" , height:"250px"}} variant="top" src={img} />
        <Card.Body>
          <Card.Title>{company}</Card.Title>
          <Card.Text style={{ fontWeight: "bolder", color: "#4e4246" }}>
            $ {price}
          </Card.Text>

          <Bttn>
            <Link to={`/details/${id}`}>
            <Button

              type="submit"
              style={{
                color: "black",
                backgroundColor: "#e5195f",
                border: "none",
              }}
              
             >
              Details
            </Button>
            </Link>

            {cart.some((p) => p.id === id) ? (
              <Button
                variant="danger"
                style={{ color: "black" }}
                onClick={handleRemove}
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
                onClick={handleCart}
                disabled={!id}
              >
                {" "}
                {!id ? "Out of Stock" : "Add to Cart"}{" "}
              </Button>
            )}
          </Bttn>
        </Card.Body>
      </Card>
    </div>
  );
};

const Bttn = styled.div`
  display:flex;
  justify-content: space-between;

  @media (max-width: 400px) {
    flex-direction:column;
    justify-content: space-between;
    gap:12px;
    &:last-of-type {
      margin-top : 1rem;
    }

  }
`;

export default Products;

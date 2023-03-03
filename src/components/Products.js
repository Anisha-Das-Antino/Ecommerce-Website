import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { CartState } from './context/Context';

const Products = ({ product, id, img, title, price, button, company }) => {

    const { state: { cart }, dispatch, } = CartState();

    return (

        <div id={id} className='inline-block px-[1rem] pb-[4rem] '>
            <Card style={{ width: '18rem', left: "32px" }} >
                <Card.Img variant="top" src={img} />
                <Card.Body >
                    <Card.Title>{company}</Card.Title>
                    <Card.Text style={{ fontWeight: "bolder", color: "#4e4246" }}>
                        $ {price}
                    </Card.Text>

                    <div className='flex justify-between'>
                        <Button type="submit" style={{ color: "black", backgroundColor: "#e5195f", border: "none" }}>{button}</Button>
                        {cart.some((p) => p.id === id) ? (
                            <Button variant='danger' style={{color:"black"}}
                                onClick={() => {
                                    dispatch({
                                        type: "REMOVE_FROM_CART",
                                        payload: product
                                    })
                                }}>Remove from cart</Button>
                        ) : (<Button type="submit" style={{ color: "black", backgroundColor: "#e5195f", border: "none" }}
                            onClick={() => {
                                dispatch({
                                    type: "ADD_TO_CART",
                                    payload: product
                                })
                            }}
                            disabled={!id}> {!id ? "Out of Stock" : "Add to Cart"} </Button>)}

                    </div>


                </Card.Body>
            </Card>
        </div>
    );
}

export default Products;
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Products = ({ img, title, price, button }) => {
    return (

        <div className='inline-block px-[1rem] pb-[4rem] '>
            <Card style={{ width: '18rem', left: "32px" }} >
                <Card.Img variant="top" src={img} />
                <Card.Body >
                    <Card.Title>{title}</Card.Title>
                    <Card.Text style={{ fontWeight: "bolder", color: "#4e4246" }}>
                        {price}
                    </Card.Text>
                    <div className='flex justify-between'>
                        <Button type="submit" style={{ color: "black", backgroundColor: "#e5195f", border: "none" }}>{button}</Button>
                        <Button type="submit" style={{ color: "black", backgroundColor: "#e5195f", border: "none" }}> + </Button>
                    </div>
                </Card.Body>
            </Card>
        </div>

    );
}

export default Products;
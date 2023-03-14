// src/components/bootstrap-carousel.component.js
import React from "react";
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
class CarouselComponent extends React.Component {
    render() {
        return (
            <div>
                <div className='container-fluid' >

                    <div className="row">
                        <div className="col-12 py-[4rem] px-[3rem] w-100 m-auto " >
                            <Carousel>
                                <Carousel.Item >
                                    <img
                                        className="d-block w-100 "
                                        style={{ height: "60vh" }}
                                        src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvcHBpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
                                        alt="First slide"
                                    />
                                    <Carousel.Caption>
                                        <h3 >Shopping is fun</h3>
                                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        style={{ height: "60vh" }}
                                        src="https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGZhc2hpb258ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
                                        alt="Second slide"
                                    />
                                    <Carousel.Caption>
                                        <h3>New Party Wear Collection</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        style={{ height: "60vh" }}
                                        src="https://images.unsplash.com/photo-1526738549149-8e07eca6c147?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Z2FkZ2V0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
                                        alt="Third slide"
                                    />
                                    <Carousel.Caption>
                                        <h3>Gadgets</h3>
                                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
}
export default CarouselComponent;
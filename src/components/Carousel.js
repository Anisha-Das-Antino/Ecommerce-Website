// src/components/bootstrap-carousel.component.js
import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const BlurredBox = ({ children }) => {
  return (
    <div
      style={{
        backdropFilter: "blur(7px)",
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        padding: "1rem",
        height: "70px",
        width: "500px",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -100%)",
        borderRadius: "8px",
        maxWidth: "80%",
      }}
    >
      {children}
    </div>
  );
};

class CarouselComponent extends React.Component {
  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 py-[4rem] px-[3rem] w-100 m-auto ">
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    style={{ height: "400px", objectFit: "cover" }}
                    src="https://ps.w.org/rs-wp-books-showcase/assets/banner-1544x500.png?rev=2713539"
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3 style={{ color: "blueviolet" }}>Visit Bookstore</h3>
                    <p
                      style={{
                        color: "blueviolet",
                        fontWeight: "bold",
                        paddingBottom: "120px",
                      }}
                    >
                      50% off in-store offers. Shop now.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    style={{ height: "400px", objectFit: "cover" }}
                    src="https://images.pexels.com/photos/2465877/pexels-photo-2465877.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Second slide"
                  />
                  <Carousel.Caption>
                    <h3 style={{ color: "brown", paddingLeft: "500px" }}>
                      #Trending
                    </h3>
                    <p
                      style={{
                        color: "brown",
                        paddingBottom: "250px",
                        paddingLeft: "500px",
                        fontWeight: "bold",
                      }}
                    >
                      A brand new book from India's best loved author, on the
                      joys of growing old. Pre-Book Now.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    style={{ height: "400px", objectFit: "cover" }}
                    src="https://images.pexels.com/photos/2943603/pexels-photo-2943603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Third slide"
                  />
                  <Carousel.Caption>
                    <BlurredBox>
                      <h3 style={{ color: "black", fontWeight: "bold" }}>
                        Antino Bookstore
                      </h3>
                      <p style={{ color: "black" }}>
                        Wide selection | 25M+ | in 8+ languages
                      </p>
                    </BlurredBox>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default CarouselComponent;

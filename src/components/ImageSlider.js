// components/ImageSlider.js
import React from "react";
import { Carousel, Row, Col } from "react-bootstrap";

const ImageSlider = () => {
    return (
        <div className="container mt-4">
            <Row>
                {/* Main Slider */}
                <Col md={8}>
                    <Carousel fade indicators={true}>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://tse2.mm.bing.net/th?id=OIP.RMYiXupBXYnf-pxdKHkADAHaEo&pid=Api&P=0&h=180"
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://tse2.mm.bing.net/th?id=OIP.AiBnGbferT1Di2xdXjac9gHaEo&pid=Api&P=0&h=180"
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://tse3.mm.bing.net/th?id=OIP.L5Z6FQO2KqHBQqAtQvjrgAHaEo&pid=Api&P=0&h=180"
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </Col>

                {/* Static Right Image */}
                <Col md={4}>
                    <div className="h-100 d-flex align-items-center justify-content-center bg-light border">
                        <img
                            src="https://tse1.mm.bing.net/th?id=OIP.QDRyjf3NVbgvFg6R_9fkgQHaNK&pid=Api&P=0&h=180"
                            alt="Featured"
                        // className="img-fluid"
                        />
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default ImageSlider;

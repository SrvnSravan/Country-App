import React from "react";
import { Carousel, Row, Col } from "react-bootstrap";

const ImageSlider = () => {
    return (
        <div className="container-fluid mt-4 px-5">
            <Row className="gx-3 gy-3">
                {/* Static Right Image - comes first on small screens */}
                <Col xs={12} md={4} className="order-1 order-md-2">
                    <div
                        className="d-flex align-items-center justify-content-center bg-light border"
                        style={{
                            height: "60vh", // relative height
                            // maxHeight: "480px",
                            overflow: "hidden",
                        }}
                    >
                        <img
                            src="https://images.pexels.com/photos/32162375/pexels-photo-32162375/free-photo-of-contemplative-moment-by-historic-ankara-wall.jpeg?auto=compress&cs=tinysrgb&w=600"
                            alt="Featured"
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "fill",
                            }}
                        />
                    </div>
                </Col>

                {/* Main Slider - comes second on small screens */}
                <Col xs={12} md={8} className="order-2 order-md-1">
                    <Carousel fade indicators={true}>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://wallpaperaccess.com/full/1369012.jpg"
                                alt="First slide"
                                style={{
                                    height: "60vh",
                                    objectFit: "cover",
                                    width: "100%",
                                }}
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://wallpaperaccess.com/full/1164164.jpg"
                                alt="Second slide"
                                style={{
                                    height: "60vh",
                                    objectFit: "cover",
                                    width: "100%",
                                }}
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://wallpaperaccess.com/full/1379846.jpg"
                                alt="Third slide"
                                style={{
                                    height: "60vh",
                                    objectFit: "cover",
                                    width: "100%",
                                }}
                            />
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
        </div>
    );
};

export default ImageSlider;

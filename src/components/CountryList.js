import React, { useEffect } from "react";
import { Container, Row, Col, Spinner, Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import CountryCardHorizontal from "./CountryCardHorizontal";
import { fetchCountries } from "../redux/countriesSlice";

const CountryList = () => {
    const dispatch = useDispatch();
    const { filteredCountries, page, perPage, loading, error } = useSelector((state) => state.countries);

    useEffect(() => {
        dispatch(fetchCountries());
    }, [dispatch]);

    const countriesToShow = filteredCountries.slice(0, page * perPage);

    return (
        <Container fluid className="py-4">
            {loading && (
                <div className="d-flex justify-content-center py-4">
                    <Spinner animation="border" variant="primary" />
                </div>
            )}

            {error && (
                <Alert variant="danger" className="text-center">
                    Failed to load countries: {error}
                </Alert>
            )}

            {!loading && !error && (
                <Row>
                    {countriesToShow.map((country) => (
                        <Col key={country.name} xs={12} md={6} className="mb-3">
                            <CountryCardHorizontal
                                name={country.name}
                                region={country.region}
                                flag={country.flag}
                            />
                        </Col>
                    ))}
                </Row>
            )}
        </Container>
    );
};

export default CountryList;

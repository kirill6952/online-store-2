import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import StoreItem from '../components/StoreItem';
import carsData from '../data/items.json';
import logo from "../components/super.png";

const Home = () => {
    const featuredCars = carsData.slice(0, 3);

    return (
        <Container className="mt-5">

            <Row className="align-items-center">
                <Col md={7}>
                    <h1 className='Welcome'>Welcome to Super-Car-Sales.com</h1>
                    <p className="lead">Discover your dream car today.</p>
                    <div className="mt-4">
                        <Link to="/store">
                            <Button variant="outline-secondary" className="me-3">Explore Cars</Button>
                        </Link>
                        <Link to="/about">
                            <Button variant="outline-secondary">About Us</Button>
                        </Link>
                    </div>
                </Col>
                <Col md={5} className="ms-auto d-flex justify-content-end">
                    <img
                        src={logo}
                        alt='Logo'
                        height='120'
                        width='120'
                    />
                </Col>
            </Row>

            {/* Featured Cars Section */}
            <Row className="mt-5">
                <Col>
                    <h2>Featured Cars</h2>
                    <Row className="mt-3">
                        {featuredCars.map(car => (
                            <Col key={car.id} md={4} className="mb-4">
                                <StoreItem item={car} />
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default Home;

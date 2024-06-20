import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const About = () => {
    return (
        <Container className="mt-5">
            <h1>About Us</h1>
            <p>Welcome to our car sales company. We are dedicated to providing the best service and quality cars to our customers.</p>

            <Row className="mt-4">
                <Col md={12}>
                    <h2>Our Mission</h2>
                    <p>Our mission is to make car buying a seamless and enjoyable experience. We aim to offer a wide range of high-quality vehicles at competitive prices, along with exceptional customer service.</p>
                </Col>
            </Row>

            <Row className="mt-4">
                <Col md={12}>
                    <h2>Our Values</h2>
                    <ul>
                        <li><strong>Customer Satisfaction:</strong> We prioritize our customers' needs and strive to exceed their expectations.</li>
                        <li><strong>Integrity:</strong> We conduct our business with honesty and transparency.</li>
                        <li><strong>Quality:</strong> We offer only the best quality vehicles and services.</li>
                        <li><strong>Innovation:</strong> We embrace new technologies to improve the car buying experience.</li>
                    </ul>
                </Col>
            </Row>

            <Row className="mt-4">
                <Col md={12}>
                    <h2>Our History</h2>
                    <p>Founded in 2005, our company has grown to become one of the leading car dealerships in the region. Over the years, we have built a reputation for reliability and customer satisfaction.</p>
                </Col>
            </Row>


        </Container>
    );
};

export default About;

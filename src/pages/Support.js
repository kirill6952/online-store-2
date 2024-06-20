import React from 'react';
import { Container, Row, Col, Form, Button, Accordion } from 'react-bootstrap';

const Support = () => {
    return (
        <Container className="mt-5">
            <h1>Support</h1>
            <p>If you have any questions or need assistance, please feel free to reach out to us.</p>

            <Row className="mt-4">
                <Col md={6}>
                    <h2>Contact Us</h2>
                    <Form>
                        <Form.Group controlId="formName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter your name" />
                        </Form.Group>

                        <Form.Group controlId="formEmail" className="mt-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter your email" />
                        </Form.Group>

                        <Form.Group controlId="formMessage" className="mt-3">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows={5} placeholder="Enter your message" />
                        </Form.Group>

                        <Button variant="primary" type="submit" className="mt-3">
                            Submit
                        </Button>
                    </Form>
                </Col>

                <Col md={6}>
                    <h2>Frequently Asked Questions</h2>
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>How can I buy a car?</Accordion.Header>
                            <Accordion.Body>
                                To buy a car, browse our store, select the car you like, and follow the checkout process. If you need assistance, contact our support team.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>What payment methods do you accept?</Accordion.Header>
                            <Accordion.Body>
                                We accept various payment methods including credit cards, debit cards, and bank transfers. Please contact support if you have any questions about payment methods.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Can I return a car after purchase?</Accordion.Header>
                            <Accordion.Body>
                                Yes, we have a return policy that allows you to return a car within a certain period. Please refer to our return policy page for more details.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Col>
            </Row>

            <Row className="mt-4">
                <Col>
                    <h2>Contact Information</h2>
                    <p>Email: support@carsales.com</p>
                    <p>Phone: +123 456 7890</p>
                    <p>Address: 123 Car Sales Street, Car City, CS 12345</p>
                </Col>
            </Row>
        </Container>
    );
};

export default Support;

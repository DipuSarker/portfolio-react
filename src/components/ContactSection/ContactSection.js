import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";

class ContactSection extends Component {
    render() {
        return (
            <Fragment>
                <Container className="mt-5">
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <h1 className="serviceName">Quick Connect</h1>
                            <Form>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text"/>
                                </Form.Group>

                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email"/>
                                </Form.Group>


                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Your Message</Form.Label>
                                    <Form.Control as="textarea" rows="3"/>
                                </Form.Group>


                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>

                        </Col>

                        <Col lg={6} md={6} sm={12}>
                            <h1 className="serviceName">Discuss Now</h1>
                            <p className="serviceDescription">#18/20 Khilkhet, Nikunja-2, 3rd Floor Front Side, Dhaka</p>
                            <p className="serviceDescription"><FontAwesomeIcon icon={faEnvelope} /> mr.d.sarker@gmail.com</p>
                            <p className="serviceDescription"><FontAwesomeIcon icon={faPhone} /> 01675707621</p>
                        </Col>

                    </Row>

                </Container>
            </Fragment>
        );
    }
}

export default ContactSection;
import React, {Component, Fragment} from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";

class AllProjects extends Component {
    render() {
        return (
            <Fragment>
                <Container className="text-center mt-5">
                    <Row>
                        <Col sm={12} md={6} lg={4} className="pt-2">
                            <Card className="projectCard">
                                <Card.Img variant="top" src="http://rabbil.com/ControlPanel/Images/foodbazz.png" />
                                <Card.Body>
                                    <Card.Title className="projectCardTitle">Food Buzz</Card.Title>
                                    <Card.Text className="projectCardDes">
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Details</Button>
                                </Card.Body>
                            </Card>
                        </Col>


                        <Col sm={12} md={6} lg={4} className="pt-2">
                            <Card className="projectCard">
                                <Card.Img variant="top" src="http://rabbil.com/ControlPanel/Images/aamBagan.png" />
                                <Card.Body>
                                    <Card.Title className="projectCardTitle">Fruits Hunt</Card.Title>
                                    <Card.Text className="projectCardDes">
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Details</Button>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col sm={12} md={6} lg={4} className="pt-2">
                            <Card className="projectCard">
                                <Card.Img variant="top" src="http://rabbil.com/ControlPanel/Images/travelapp.png" />
                                <Card.Body>
                                    <Card.Title className="projectCardTitle">Bangla Travel</Card.Title>
                                    <Card.Text className="projectCardDes">
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Details</Button>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col sm={12} md={6} lg={4} className="pt-2">
                            <Card className="projectCard">
                                <Card.Img variant="top" src="http://rabbil.com/ControlPanel/Images/travelapp.png" />
                                <Card.Body>
                                    <Card.Title className="projectCardTitle">Bangla Travel</Card.Title>
                                    <Card.Text className="projectCardDes">
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Details</Button>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col sm={12} md={6} lg={4} className="pt-2">
                            <Card className="projectCard">
                                <Card.Img variant="top" src="http://rabbil.com/ControlPanel/Images/travelapp.png" />
                                <Card.Body>
                                    <Card.Title className="projectCardTitle">Bangla Travel</Card.Title>
                                    <Card.Text className="projectCardDes">
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Details</Button>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col sm={12} md={6} lg={4} className="pt-2">
                            <Card className="projectCard">
                                <Card.Img variant="top" src="http://rabbil.com/ControlPanel/Images/travelapp.png" />
                                <Card.Body>
                                    <Card.Title className="projectCardTitle">Bangla Travel</Card.Title>
                                    <Card.Text className="projectCardDes">
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Details</Button>
                                </Card.Body>
                            </Card>
                        </Col>

                    </Row>
                </Container>

            </Fragment>
        );
    }
}

export default AllProjects;
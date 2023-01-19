import React from "react";
import { Card, Container, Col, Row, Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import imageUrl from "../Resources/profile_pic.jpg";

export default function Home() {

    return (
        <Container /*fluid={true}*/ className="d-flex flex-row ">
            <Row xs={1} lg={2} >
                <Col>
                    <Card style={{marginTop: "5rem", height: "100%", backgroundColor: "#99999900", border: "none"}}>
                        <Image thumbnail={true} style={{maxWidth: "fit-content", height:"90%"}} fluid={true} rounded={true} src={imageUrl}/>
                    </Card>
                </Col>
                <Col >
                    <Card style={{marginTop:"5rem", height: "90%"}}>
                        {/* <Card.Img variant="top" src={imageUrl} /> */}
                        <Card.Header>About</Card.Header>
                        <Card.Body>
                            <Card.Subtitle>Hi There!</Card.Subtitle>
                            <Card.Text>
                                My name is <b>Derek Walz</b>. I am currently pursuing a Master's Degree in Software Engineering
                                at the University of Calgary graduating in April 2023. I love learning and applying new skills and I am excited to 
                                transition into a new career path. 
                            </Card.Text>
                            <Card.Text>
                                In the past year I have been developing skills in Java, Python, C++, Javascript and have been using React, NodeJS, and Spring frameworks to 
                                build a foundational programming base to help me move forward. Click on the button below to check out some of my recent projects. 
                            </Card.Text>
                            <Card.Text>
                                I have almost a decade of Chemical engineering experience working in the oil and gas industry as both a 
                                process and operations engineer. This experience allowed me to develop skills working with diverse 
                                teams and applying technical knowledge to troubleshoot every day issues.
                            </Card.Text>
                            <div className="d-grid gap-2">
                                <Button variant="outline-primary" as={Link} size="lg" to="/projects">Projects</Button>{'   '}
                                <Button variant="outline-primary" as={Link} size="lg" to="/contact">Contact Info</Button>{'   '}
                            </div>
                            
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        
        </Container>   
    );
}
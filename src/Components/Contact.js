import React, {useState} from "react";
import { Card, Container, Col, Row, Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import imageUrl from "../Resources/communicate.png";
import copy from "copy-to-clipboard";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLinkedin, faGithubSquare} from '@fortawesome/free-brands-svg-icons';

export default function Contact() {

    const [copyText] = useState('derekpwalz@hotmail.com');
    
    const copyToClipboard = () => {
       copy(copyText);
       alert(`You have copied "${copyText}"`);
    }

    return (
        <Container /*fluid={true}*/ className="d-flex flex-row ">
            <Row xs={1} lg={2} >
                <Col>
                    <Card style={{marginTop: "5rem", height: "100%", backgroundColor: "#99999900", border: "none"}}>
                        {/* <Breadcrumb.Item href="https://www.flaticon.com/free-icons/contact" title="Contact icons created by srip - Flaticon"/> */}
                        <Image style={{ height:'auto'}} href="https://www.flaticon.com/free-icons/contact" title="Contact icons created by srip - Flaticon"  fluid={true} rounded={true} src={imageUrl}/>
                    </Card>
                </Col>
                <Col >
                    <Card style={{marginTop:"5rem", height: '90%'}}>
                        {/* <Card.Img variant="top" src={imageUrl} /> */}
                        <Card.Header>Contact Info</Card.Header>
                        <Card.Body>
                            <Card.Subtitle>Reach Me At: </Card.Subtitle>
                            <Card.Text>
                                <ul>
                                    <li>Email: <a href= " " onClick={copyToClipboard}>derekpwalz@hotmail.com</a></li>
                                    <li>Cell: 403-860-8923</li>
                                </ul>
                            </Card.Text>
                            <Card.Subtitle>Find Me At: </Card.Subtitle>
                            <Card.Text className="d-flex justify-content-evenly" style={{fontSize: '2rem'}}>
                                <a href="https://www.linkedin.com/in/derek-walz-008580208">
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </a> 
                                <a href="https://github.com/dpwalz">
                                    <FontAwesomeIcon icon={faGithubSquare} />
                                </a>
                                    
                                
                            </Card.Text>


                            <div className="d-grid gap-2">
                                <Button variant="outline-primary" as={Link} size="lg" to="/">About Me</Button>{'   '}
                                <Button variant="outline-primary" as={Link} size="lg" to="/projects">Projects</Button>{'   '}
                            </div>
                            
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        
        </Container>   
       
    );
}
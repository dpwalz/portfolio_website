import React from "react";
import {Container, Card} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithubSquare} from '@fortawesome/free-brands-svg-icons';

export default function Movie_Reservation_App() {

    return (
        <Container style={{marginTop: "5rem"}}>
            <Card>
                <Card.Header> Full Stack Web App </Card.Header>
                <Card.Body>
                    <Card.Title>Movie Reservation App</Card.Title>
                    <Card.Subtitle>
                        About:
                    </Card.Subtitle>
                    <Card.Text>
                    MEng project to develop a full stack web application for a Movie Reservation System. Initially I built the frontend, backend, and relational database for the entire payment system as well as backend and database
                    components for the ticketing and cancellation. I also refactored to improve the movie and seat selection with graphical interfaces. 

                    This application uses NodeJS with express for the server side, MySQL for the relational database, and ReactJS framework for the frontend. 
                    </Card.Text>
                    <Card.Subtitle>
                        How it Works: 
                    </Card.Subtitle>
                    <Card.Text>
                    This application allows a user to complete all necessary stages for booking a movie ticket as a registered or guest user. A registered users tickets and credit are stored to allow cancellation and purchase with store credit. 
                    Application is fullstack and uses REST api calls to communicate between client and server. Functionality and error handling is fully implemented to handle issues with ticket and payment success/failure.  
                    </Card.Text>
                    <Card.Subtitle>
                        Check it Out: 
                    </Card.Subtitle>
                    <Card.Text>
                        <ul>
                            <li>
                                <a href="https://github.com/dpwalz/Movie-Reservation-App">
                                    <FontAwesomeIcon icon={faGithubSquare} style={{fontSize: '2rem'}}/>
                                </a>
                            </li>
                        </ul>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
       
    );
}
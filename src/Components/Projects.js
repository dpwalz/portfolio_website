import React from "react";
import {Container, Card} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'; 

export default function Projects() {

    return (
        <Container style={{marginTop: "5rem"}}>
            <Card>
                <Card.Header> NatHacks 2022 </Card.Header>
                <Card.Body>
                    <Card.Title>EOG Mouse Control</Card.Title>
                    <Card.Subtitle>
                        About:
                    </Card.Subtitle>
                    <Card.Text>
                    People suffering from permanent or temporary mobility issues can be limited when trying to participate with today’s 
                    conventional entertainment measures. EOG Mouse Control can play a role in broadening access for those requiring alternative
                    means outside of typical muscle control.
                    </Card.Text>
                    <Card.Subtitle>
                        How it Works: 
                    </Card.Subtitle>
                    <Card.Text>
                    Two BioAmp EXG Pill sources are used (beside each eye and above and below one eye). 
                    The sources are fed in through an Arduino microcontroller. A series of python code is used to run the application. 
                    The application allows a user to complete full range of mouse movements and left and right mouse click action with use of
                    EOG muscles. 
                    </Card.Text>
                    <Card.Subtitle>
                        Check it Out: 
                    </Card.Subtitle>
                    <Card.Text>
                        <ul>
                            <li>
                                <a href="https://www.youtube.com/watch?v=8hNw2gWGpAQ">
                                    <FontAwesomeIcon icon={faYoutube} style={{fontSize: '2rem'}}/>
                                </a>
                            </li>
                            <li>Also available on <a href="https://devpost.com/software/eog-mouse-control">DevPost</a></li>
                        </ul>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
       
    );
}
import React from "react";
import { Card,
         CardContent, 
         CardHeader,
         IconButton, 
         Typography } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';

export default function MovieReservationModal(props) {

    return (
        <Card sx={props.modalstyle}>
            <CardHeader title={props.title} subheader={props.subheader} />
            <CardContent>
                <Typography variant="subtitle1">
                    About:
                </Typography>
                <Typography paragraph variant="body2" color="text.secondary">
                    MEng project to develop a full stack web application for a Movie Reservation System. Initially I built the frontend, backend, and relational database for the entire payment system as well as backend and database
                    components for the ticketing and cancellation. I also refactored to improve the movie and seat selection with graphical interfaces. 

                    The users tickets persist and they are able to view purchased tickets, cancel tickets, and reuse credit if available.  
                </Typography>
                <Typography variant="subtitle1">
                    How it Works: 
                </Typography>
                <Typography paragraph variant="body2" color="text.secondary">
                    This application allows a user to complete all necessary stages for booking a movie ticket as a registered or guest user. A registered users' tickets and credit are stored to allow cancellation and purchase with store credit. 
                    Application is fullstack and uses REST api calls to communicate between client and server. Functionality and error handling is fully implemented to handle issues with ticket and payment success/failure.  
                    JwtToken is handled between the client and server for authorization puurposes. 
                </Typography>
                <Typography variant="subtitle1">Skills Used:</Typography>
                <Typography paragraph variant="body2" color="text.secondary" component="ul">
                    <li>Front End: ReactJS</li>
                    <li>Back End: NodeJS with Express</li>
                    <li>MySQL and Relational Database Design</li>
                </Typography>
                <Typography variant="subtitle1">
                    Check it Out: 
                </Typography>
                <Typography variant="body2" component="ul">
                    <li>
                        <IconButton
                        size="large"
                        href="https://github.com/dpwalz/Movie-Reservation-App"
                        aria-label="github repository for movie reservation app"
                        aria-haspopup="true"
                        color="text.primary"
                        >
                            <GitHubIcon />
                        </IconButton>
                    </li>
                </Typography>
            </CardContent>
        </Card> 
       
    );
}
import React from "react";
import { Card,
         CardContent, 
         CardHeader,
         IconButton, 
         Typography } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';

export default function StudentRegistrationModal(props) {

    return (
        <Card sx={props.modalstyle}>
            <CardHeader title={props.title} subheader={props.subheader}/>
            <CardContent>
                <Typography variant="subtitle1">
                    About:
                </Typography>
                <Typography paragraph variant="body2" color="text.secondary">
                    MEng project to create a complete client-server application for a student registration system. Students are able to log in, view, and revise their course applications. 
                </Typography>
                <Typography variant="subtitle1">
                    How it Works: 
                </Typography>
                <Typography paragraph variant="body2" color="text.secondary">
                    This application allows a user to view, register, and drop courses all from a simple dashboard. Courses must have satisfied all course pre-requisites and courses must meet typical enrollment thresholds. 
                    The application is fullstack and uses REST api calls to communicate between client and server. The backend is build off of the Spring framework integrating with MySQL database server.   
                </Typography>
                <Typography variant="subtitle1">Skills Used:</Typography>
                <Typography paragraph variant="body2" color="text.secondary" component="ul">
                    <li>Front End: Vanilla Javascript, HTML, and CSS</li>
                    <li>Back End: Java with Spring Boot</li>
                    <li>MySQL and Relational Database Design</li>
                </Typography>
                <Typography variant="subtitle1">
                    Check it Out: 
                </Typography>
                <Typography variant="body2" component="ul">
                    <li>
                        <IconButton
                        size="large"
                        href="https://github.com/dpwalz/StudentRegistration"
                        aria-label="github repository for student registration application"
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
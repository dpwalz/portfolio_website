import React from "react";
import { Card,
         CardContent, 
         CardHeader,
         IconButton, 
         Typography } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    minWidth: 400, 
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    maxHeight: '80%', 
    overflow: 'auto'
  };

export default function FindMyMentorModal(props) {

    return (
        <Card sx={style}>
            <CardHeader title={props.title} subheader={props.subheader}/>
            <CardContent>
                <Typography variant="subtitle1">
                    About:
                </Typography>
                <Typography paragraph variant="body2" color="text.secondary">
                    Currently the AHS Nurse Mentorship Network is a cumbersome process that requires a mentee to review a large list of mentors manually and then must go through the process of contacting mentors to 
                    find the right fit. FindMyMentor solves these issues by automating the process and instantly pairing the mentee with potential fits. This would rejuvinate this process and help nurses get the
                    meaningful interactions and guidance from others within the industry.  
                </Typography>
                <Typography variant="subtitle1">
                    How it Works: 
                </Typography>
                <Typography paragraph variant="body2" color="text.secondary">
                    This is a fullstack application that provides the user with a streamlined interface that matches them to mentors based on their user inputs. A user registers and provides a number
                    of key details, they are then provided with a list of potential matches. The backend uses an algorithm to match mentees and mentors base on their interest and scopes. Rest APIs are used 
                    for interaction between the frontend and backend. A nosql database is also built to facilitate the matchmaking process. 
                </Typography>
                <Typography variant="subtitle1">Skills Used:</Typography>
                <Typography paragraph variant="body2" color="text.secondary" component="ul">
                    <li>Front End: ReactJS</li>
                    <li>Backend: NodeJS with Express and Mongoose</li>
                    <li>NoSql database using mongoDB</li>
                </Typography>
                <Typography variant="subtitle1">
                    Check it Out: 
                </Typography>
                <Typography variant="body2" component="ul">
                    <li>
                        <IconButton
                        size="large"
                        href="https://github.com/dpwalz/FindMyMentor"
                        aria-label="github repository for mentor-mentee matching application"
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
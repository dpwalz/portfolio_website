import React from "react";
import { Button,
         Card, 
         CardContent, 
         CardHeader,
         IconButton,
         Typography } from "@mui/material";
import YouTubeIcon from '@mui/icons-material/YouTube'; 

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

export default function EogMouseControlModal(props) {

    return (

    <Card sx={style}>
        <CardHeader title={props.title} subheader={props.subheader} />
        <CardContent>
            <Typography variant="subtitle1">
                About:
            </Typography>
            <Typography paragraph variant="body2" color="text.secondary">
                People suffering from permanent or temporary mobility issues can be limited when trying to participate with today’s 
                conventional entertainment measures. EOG Mouse Control can play a role in broadening access for those requiring alternative
                means outside of typical muscle control.
            </Typography>
            <Typography variant="subtitle1">
                How it Works: 
            </Typography>
            <Typography paragraph variant="body2" color="text.secondary">
                Two BioAmp EXG Pill sources are used (beside each eye and above and below one eye). 
                The sources are fed in through an Arduino microcontroller. A series of python code is used to run the application. 
                The application allows a user to complete full range of mouse movements and left and right mouse click action with use of
                EOG muscles. 
            </Typography>
            <Typography variant="subtitle2">Skills Used:</Typography>
                <Typography paragraph variant="body2" color="text.secondary" component="ul">
                    <li>Python scripting</li>
                    <li>Tensorflow and Machine Learning with data pipeline</li>
                </Typography>
            <Typography variant="subtitle1">
                Check it Out: 
            </Typography>
            <Typography variant="body2" component="ul">
                <li>
                    <IconButton
                        size="large"
                        href="https://www.youtube.com/watch?v=8hNw2gWGpAQ"
                        aria-label="youtube video of eog mouse control project"
                        aria-haspopup="true"
                        color="text.primary"
                    >
                        <YouTubeIcon />   
                    </ IconButton>
                </li>
                <li>Also available on <Button href="https://devpost.com/software/eog-mouse-control">DevPost</Button></li>
            </Typography>
      </CardContent>
    </Card>      
    );
}
import React, {useState} from "react";
import {Button,
        Card, 
        CardActions, 
        CardContent, 
        CardHeader, 
        Modal,
        Typography} from "@mui/material";
import FindMyMentorModal from "./FindMyMentorModal";

const style = {
    minHeight: 389
}

const title = "2023 UofC Nurses/Software Hackathon - FindMyMentor";
const subheader = "Hackathon - Fullstack Web App";

export default function FindMyMentor() {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
    <React.Fragment>
        <Card sx={style}>
            <CardHeader title={title} subheader={subheader} />
            <CardContent>
                <Typography variant="subtitle2" color="text.primary">About:</Typography>
                <Typography paragraph variant="body2" color="text.secondary">
                    A simple and streamlined approach to improve on AHS' current nursing mentorship program. An application that matches mentees and mentors based on their interests and scope of practices.  
                </Typography>
                <Typography variant="subtitle2">Skills Used:</Typography>
                <Typography paragraph variant="body2" color="text.secondary" component="ul">
                    <li>Frontend: ReactJS</li>
                    <li>Backend: NodeJS with Express and Mongoose</li>
                    <li>NoSql database using mongoDB</li>
                </Typography>
            </CardContent>
            <CardActions>
                <Button color="inherit" variant="contained" onClick={handleOpen}>Details</Button>
            </CardActions>
        </Card>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="FindMyMentor description display"
        aria-describedby="Further detail on the mentor-mentee matching application "
        element="Card"
        >
            <div>
                <FindMyMentorModal title={title} subheader={subheader} />
            </div>  
        </Modal>
    </React.Fragment>    
    );
}
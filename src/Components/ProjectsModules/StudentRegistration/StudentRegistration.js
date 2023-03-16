import React, {useState} from "react";
import {Button,
        Card, 
        CardActions, 
        CardContent, 
        CardHeader, 
        Modal,
        Typography} from "@mui/material";
import StudentRegistrationModal from "./StudentRegistrationModal";

const title = "Student Registration System";
const subheader = "Fullstack Web App";

export default function StudentRegistration(props) {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
    <React.Fragment>
        <Card sx={props.paperstyle}>
            <CardHeader title={title} subheader={subheader} />
            <CardContent>
                <Typography variant="subtitle2" color="text.primary">About:</Typography>
                <Typography paragraph variant="body2" color="text.secondary">
                    Allows student users to view, register, and remove courses based on a prebuilt course database.   
                </Typography>
                <Typography variant="subtitle2">Skills Used:</Typography>
                <Typography paragraph variant="body2" color="text.secondary" component="ul">
                    <li>Frontend: Javascript, HTML, and CSS</li>
                    <li>Backend: Java with Spring Boot</li>
                    <li>MySQL and Relational Database Design</li>
                </Typography>
            </CardContent>
            <CardActions>
                <Button color="inherit" variant="contained" onClick={handleOpen}>Details</Button>
            </CardActions>
        </Card>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="Student Registration description"
        aria-describedby="Further detail on the student registration client-server application"
        element="Card"
        >
            <div>
                <StudentRegistrationModal modalstyle={props.modalstyle} title={title} subheader={subheader}/>
            </div>
            
        </Modal>
    </React.Fragment>    
    );
}
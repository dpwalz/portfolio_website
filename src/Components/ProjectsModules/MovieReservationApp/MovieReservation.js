import React, {useState} from "react";
import {Button,
        Card, 
        CardActions, 
        CardContent, 
        CardHeader, 
        Modal,
        Typography} from "@mui/material";
import MovieReservationModal from "./MovieReservationModal.js";

const title = "Movie Reservation App";
const subheader = "Fullstack Web App";

export default function MovieReservation(props) {

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
                    Fullstack app that allows the user to purchase a movie ticket from a database of movies, showtimes, and theaters.   
                </Typography>
                <Typography variant="subtitle2">Skills Used:</Typography>
                <Typography paragraph variant="body2" color="text.secondary" component="ul">
                    <li>Front End: ReactJS</li>
                    <li>Back End: NodeJS with Express</li>
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
        aria-labelledby="Movie Reservation description"
        aria-describedby="Further detail on the movie reservation "
        element="Card"
        >
            <div>
                <MovieReservationModal modalstyle={props.modalstyle} title={title} subheader={subheader}/>
            </div>
            
        </Modal>
    </React.Fragment>    
    );
}
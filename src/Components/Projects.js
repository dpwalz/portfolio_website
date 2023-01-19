import React from "react";
import {Container} from "react-bootstrap";
import Eog_Mouse_Control from "./Projects_sub/eog_mouse_control";
import Movie_Reservation_App from "./Projects_sub/movie_reservation_app";


export default function Projects() {

    return (
        <Container style={{marginTop: "5rem"}}>
           <Eog_Mouse_Control />
           <Movie_Reservation_App />
        </Container>
       
    );
}
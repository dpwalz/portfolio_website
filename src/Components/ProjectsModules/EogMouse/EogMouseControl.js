import React, {useState} from "react";
import {Button,
        Card, 
        CardActions, 
        CardContent, 
        CardHeader, 
        Modal,
        Typography} from "@mui/material";
import EogMouseControlModal from "./EogMouseControlModal";

const title = "NatHacks 2022 - EOG Mouse Control";
const subheader = "Hackathon Project"

export default function EogMouseControl(props) {

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
                    Get complete control of a computer mouse using only eye movement. This is done completing actions based on EOG waves created from eye movement and blinking.  
                </Typography>
                <Typography variant="subtitle2">Skills Used:</Typography>
                <Typography paragraph variant="body2" color="text.secondary" component="ul">
                    <li>Python scripting</li>
                    <li>Tensorflow and Machine Learning with data pipeline</li>
                </Typography>
            </CardContent>
            <CardActions>
                <Button color="inherit" variant="contained" onClick={handleOpen}>Details</Button>
            </CardActions>
        </Card>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="Eog Mouse Control Description"
        aria-describedby="Further detail on the eog mouse control hackathon project"
        element="Card"
        >
            <div>
                <EogMouseControlModal modalstyle={props.modalstyle} title={title} subheader={subheader} />
            </div>
            
        </Modal>
    </React.Fragment>    
    );
}
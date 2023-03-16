import React, {useState} from "react";
import {Button,
        Card, 
        CardActions, 
        CardContent, 
        CardHeader, 
        Modal,
        Typography} from "@mui/material";
import RecipeBoxModal from "./RecipeBoxModal";

const style = {
    minHeight: 389
}

const title = "RecipeBox - Personal Project";
const subheader = "Fullstack Web App";

export default function RecipeBox() {

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
                    Writing a list before heading out to the grocery store? Need to pick through all your recipes to remember what ingredients you need? 
                    RecipeBox does it for you! With the click of a button all of your recipes for the week are compiled together, and you can easily add other items you need. 
                    Then you are provided with an interactive list to check through while you shop!
                </Typography>
                <Typography variant="subtitle2">Skills Used:</Typography>
                <Typography paragraph variant="body2" color="text.secondary" component="ul">
                    <li>Frontend: Angular Framework</li>
                    <li>Backend: NodeJS with Express</li>
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
        aria-labelledby="RecipeBox description display"
        aria-describedby="Further detail on the recipe box list automating application"
        element="Card"
        >
            <div>
                <RecipeBoxModal title={title} subheader={subheader}/>
            </div>  
        </Modal>
    </React.Fragment>    
    );
}
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

export default function RecipeBoxModal(props) {

    return (
        <Card sx={style}>
            <CardHeader title={props.title} subheader={props.subheader}/>
            <CardContent>
                <Typography variant="subtitle1">
                    About:
                </Typography>
                <Typography paragraph variant="body2" color="text.secondary">
                    With high inflation we all know you are better off sticking to the plan when grocery shopping, so why not make planning simple and easy! RecipeBox allows you to easily
                    create a shopping list and use an interactive list on your phone to make sure you get exactly what you need in the store. The application contains a list of your recipes 
                    and ingredients, you pick which recipes you plan on making that week and a list is created for you. Then add any other items you need. Once your ready to shop you can 
                    access the list and even cross out the items as you put them into your cart. 
                </Typography>
                <Typography variant="subtitle1">
                    How it Works: 
                </Typography>
                <Typography paragraph variant="body2" color="text.secondary">
                    This is a fullstack application that provides the user with a list of recipes and shopping lists. The user can make a new list, add any recipes they want to it and the list begins to 
                    populate. Then simply add any other items you want from a list of common ingredients or create something new. All of the recipes and items are stored in a MySQL database and accessed through
                    the backend using rest APIs. 
                    I am working on adding features to allow you to search and store recipes from popular sites and hope to host for all to use in the future. 
                </Typography>
                <Typography variant="subtitle1">Skills Used:</Typography>
                <Typography paragraph variant="body2" color="text.secondary" component="ul">
                    <li>Frontend: Angular Framework</li>
                    <li>Backend: NodeJS with Express</li>
                    <li>MySQL and Relational Database Design</li>
                </Typography>
                <Typography variant="subtitle1">
                    Check it Out: 
                </Typography>
                <Typography variant="body2" component="ul">
                    <li>
                        <IconButton
                        size="large"
                        href="https://github.com/dpwalz/recipebox"
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
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import imageUrl from "../Resources/profile_pic.jpg";
import {Card, 
        CardMedia, 
        Container, 
        Grid, 
        Box, 
        CardActions, 
        Button, 
        Paper, 
        CardContent, 
        Typography } from "@mui/material";



export default function Home() {

    return (
      <Paper square sx={{ bgcolor: '#F5EDDC', minHeight: 'calc(100vh - 211px)'}}>
        <Container component="section" sx={{pt: 10, pb: 5, display: 'flex', bgcolor: '#F5EDDC' }}>
          <Grid container>
            <Grid item xs={12} md={6} sx={{ zIndex: 1 }}>
              <Card sx={{
                justifyContent: 'center',
                py: 8,
                px: 3,
              }}>
                <CardMedia 
                  sx={{ display: { md: 'none'}}}
                  component="img"
                  height="200"
                  image={imageUrl}/>
                  <CardContent>
                    <Typography paragraph variant="body1" color="text.secondary">
                    My name is <b>Derek Walz</b>. I am currently pursuing a Master's Degree in Software Engineering
                        at the University of Calgary graduating in April 2023. I love learning and applying new skills and I am excited to 
                    transition into a new career path.
                    </Typography>
                    <Typography paragraph variant="body1" color="text.secondary">
                        In the past year I have been developing skills in Java, Python, C++, Javascript and have been using React, Angular, NodeJS, and Spring frameworks to 
                        build a foundational programming base to help me move forward. Click on the button below to check out some of my recent projects. 
                    </Typography>
                    <Typography paragraph variant="body1" color="text.secondary">
                        I have almost a decade of Chemical engineering experience working in the oil and gas industry as both a 
                    process and operations engineer. This experience allowed me to develop skills working with diverse 
                        teams and applying technical knowledge to troubleshoot every day issues.
                    </Typography>
                  </CardContent>
                  <CardActions>
                      <Button variant="outlined" 
                              color="inherit" 
                              component={RouterLink} 
                              size="lg" 
                              to={"/projects"}
                      >
                        Projects
                      </Button>
                  </CardActions>
              </Card>      
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              sx={{ display: { md: 'block', xs: 'none' }, position: 'relative'}}
            >
              <Box
                sx={{
                  position: 'absolute',
                  top: -67,
                  left: -67,
                  right: 0,
                  bottom: 0,
                  width: '100%',
                }}
              />
              <Box
                component="img"
                src={imageUrl}
                alt="Derek Profile Picture"
                sx={{
                  position: 'absolute',
                  top: -28,
                  left: -28,
                  right: 0,
                  bottom: 0,
                  width: '100%',
                  maxWidth: 600,
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Paper>  
    );
}
import React from "react";
import EogMouseControl from "./ProjectsModules/EogMouse/EogMouseControl";
import MovieReservation from "./ProjectsModules/MovieReservationApp/MovieReservation";
import StudentRegistration from "./ProjectsModules/StudentRegistration/StudentRegistration";
import FindMyMentor from "./ProjectsModules/FindMyMentor/FindMyMentor";
import {Paper, Grid} from '@mui/material';
import RecipeBox from "./ProjectsModules/RecipeBox/RecipeBox";

const style = {
  m: 2,
  height: '100%'
}

const paperstyle = {
  height:'100%'
}

const modalstyle = {
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

export default function Projects() {

    return (
      <Grid container spacing={2} sx={{ justifyContent: 'space-evenly', bgcolor: '#F5EDDC', minHeight: 'calc(100vh - 211px)', pb: '2.5%'}}>
        <Grid xs={12} sm={12} md={12} lg={6} item>
          <Paper sx={style}>
            <RecipeBox paperstyle={paperstyle} modalstyle={modalstyle}/>
          </Paper>
        </Grid>
        <Grid xs={12} sm={12} md={12} lg={6} item>
          <Paper sx={style}>
            <FindMyMentor paperstyle={paperstyle} modalstyle={modalstyle}/>
          </Paper>
        </Grid>
        <Grid xs={12} sm={12} md={12} lg={6} item>
          <Paper sx={style}>
            <MovieReservation paperstyle={paperstyle} modalstyle={modalstyle}/>
          </Paper>
        </Grid>
        <Grid xs={12} sm={12} md={12} lg={6} item>
          <Paper sx={style}>
            <EogMouseControl paperstyle={paperstyle} modalstyle={modalstyle}/>
          </Paper>
        </Grid>
        <Grid xs={12} sm={12} md={12} lg={6} item>
          <Paper sx={style}>
            <StudentRegistration paperstyle={paperstyle} modalstyle={modalstyle}/>
          </Paper>
        </Grid>

      </Grid>       
    );
}
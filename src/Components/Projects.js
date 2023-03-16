import React from "react";
import EogMouseControl from "./ProjectsModules/EogMouse/EogMouseControl";
import MovieReservation from "./ProjectsModules/MovieReservationApp/MovieReservation";
import StudentRegistration from "./ProjectsModules/StudentRegistration/StudentRegistration";
import FindMyMentor from "./ProjectsModules/FindMyMentor/FindMyMentor";
import {Paper, Grid} from '@mui/material';
import RecipeBox from "./ProjectsModules/RecipeBox/RecipeBox";

const style = {
  m: 2
}

export default function Projects() {

    return (
      <Grid container spacing={2} sx={{ justifyContent: 'space-evenly', bgcolor: '#F5EDDC', minHeight: 'calc(100vh - 196px)'}}>
        <Grid xs={12} sm={12} md={12} lg={4} item>
          <Paper sx={style}>
            <RecipeBox />
          </Paper>
        </Grid>
        <Grid xs={12} sm={12} md={12} lg={4} item>
          <Paper sx={style}>
            <FindMyMentor />
          </Paper>
        </Grid>
        <Grid xs={12} sm={12} md={12} lg={4} item>
          <Paper sx={style}>
            <MovieReservation />
          </Paper>
        </Grid>
        <Grid xs={12} sm={12} md={12} lg={4} item>
          <Paper sx={style}>
            <EogMouseControl />
          </Paper>
        </Grid>
        <Grid xs={12} sm={12} md={12} lg={4} item>
          <Paper sx={style}>
            <StudentRegistration />
          </Paper>
        </Grid>

      </Grid>       
    );
}
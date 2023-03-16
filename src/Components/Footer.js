import React, {useState} from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {  Button,
          Grid,
          IconButton,
          Paper, 
          Tooltip,
          Typography, } from "@mui/material";
import copy from "copy-to-clipboard";

export default function Footer() {

    const [copyText] = useState('derekpwalz@hotmail.com');
    const [open, setOpen] = useState(false);
    
    const copyToClipboard = () => {
       copy(copyText);
       handleTooltipOpen()
    }

    const handleTooltipClose = () => {
      setOpen(false);
    };
  
    const handleTooltipOpen = () => {
      setOpen(true);
    };

    return (
        <Paper square sx={{ bgcolor: '#CFD2CF', height: '150px', position: 'sticky'}}>
          <Grid container 
                rowSpacing={1} 
                direction="column"
                justifyContent="center"
                alignItems="center"
          >
                <Grid item xs={12} >
                    <Typography color={'text.primary'} gutterBottom>
                        Reach Me At:
                    </Typography>
                </Grid>
                <Grid item xs={12}  sx={{display: 'flex'}}>
                  <IconButton
                    size="large"
                    href="https://www.linkedin.com/in/derek-walz-008580208"
                    aria-label="linked in account of website owner"
                    aria-haspopup="true"
                    color="text.primary"
                  >
                    <LinkedInIcon />
                  </IconButton>
                  <IconButton
                    size="large"
                    href="https://github.com/dpwalz"
                    aria-label="github account of website owner"
                    aria-haspopup="true"
                    color="text.primary"
                  >
                    <GitHubIcon />
                  </IconButton>
                </Grid>
                <Grid item xs={12} >
                  <Tooltip PopperProps={{
                    disablePortal: true,
                    }}
                    onClose={handleTooltipClose}
                    open={open}
                    disableFocusListener
                    disableHoverListener
                    disableTouchListener
                    title="Copied"
                    arrow
                    placement="right">
                      <Button color="inherit" onClick={copyToClipboard}>derekpwalz@hotmail.com</Button>
                  </Tooltip>
                </Grid>
            </Grid>
        </Paper>
    );
}
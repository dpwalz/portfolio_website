import React, {useState} from "react";
import { Link } from "react-router-dom";
import {    AppBar,
            Box,
            Button,
            Container,
            IconButton,
            Menu,
            MenuItem,
            Toolbar,
            Typography} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';


export default function Header() {

    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="sticky" sx={{bgcolor: '#CFD2CF'}}>
        <Container maxWidth="false">
        <Toolbar disableGutters>
            <Typography
            variant="h6"
            noWrap
            sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'Shrikhand',
                color: 'text.primary',
                textDecoration: 'none',
            }}
            >
            Derek Walz
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="text.secondary"
            >
                <MenuIcon />
            </IconButton>
            <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                display: { xs: 'block', md: 'none' },
                }}
            >
                <MenuItem component={Link} to="/" onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">Home</Typography>
                </MenuItem>
                <MenuItem component={Link} to="/projects" onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">Projects</Typography>
                </MenuItem>
            </Menu>
            </Box>
            <Typography
            variant="h5"
            noWrap
            sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'Shrikhand',
                color: 'text.primary',
                textDecoration: 'none',
            }}
            >
            Derek Walz
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                <Button
                component={Link}
                to="/"
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'text.secondary', display: 'block' }}
                >
                    Home
                </Button>
                 <Button
                 component={Link}
                 to="/projects"
                 onClick={handleCloseNavMenu}
                 sx={{ my: 2, color: 'text.secondary', display: 'block' }}
                 >
                    Projects
                 </Button>
            </Box>
        </Toolbar>
        </Container>
        </AppBar>
        
    );
}
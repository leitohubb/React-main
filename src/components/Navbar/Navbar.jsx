import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import { Drawer, IconButton } from '@mui/material';
import ListItem from '@mui/material/ListItem';
import LinkBehavior from './LinkBehavior';
import ListItemText from '@mui/material/ListItemText';  
import logo from '../../assets/images/logo.png';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';

const useStyles = makeStyles( (theme) => ({
    title: {
        flexGrow: 1,
    },
    link: {
        color: 'white',
        textDecoration: 'none',
        margin: theme.spacing(2),
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    logo: {
        width: '20%',
        height: 'auto',
        padding: '5%',
    },
}));

//export default function Navbar() {
//const classes = useStyles();
//return (
//    <AppBar position = 'static'>
//        <Toolbar className = {classes.toolbar}>
//        <Typography variant = 'h6' className = {classes.title}>
//            SERVICIO NACIONAL DE APRENDIZAJE - SENA
//        </Typography>
//        <div>
//            <Link to = "/home" className = { classes.link}>
//            <Button color = "inherit"> Home </Button>
//            </Link>
//            <Link to = "/cursos" className = { classes.link}>
//            <Button color = "inherit"> Cursos </Button>
//            </Link>
//            <Link to = "/usuarios" className = { classes.link}>
//            <Button color = "inherit"> Usuarios </Button>
//            </Link>
//            <Link to = "/masinformacion" className = { classes.link}>
//            <Button color = "inherit"> Mas informacion </Button>
//            </Link>
//        </div>
//        </Toolbar>
//    </AppBar>
//    );
//}

export default function Navbar() {
    const classes = useStyles();
    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    };

    const drawer = (
        <div className = {classes.drawer}>
            <list>
                {['Home', 'Cursos', 'Usuarios', 'Mas Informacion'].map((text) => {
                    <ListItem button component = { LinkBehavior} to = {`/${normalizeText(text)}`} key = {text}>
                        <ListItemText primary = {text} />
                    </ListItem>
                })}
            </list>
        </div>
    );
    
    return (
        <>
            <AppBar position = "fixed">
                <Toolbar className = {classes.toolbar}>
                    <img src = {logo} alt = "LOGO AUTOSERVICIO" className = {classes.logo} />
                    <Typography variant = "h6" className = {classes.title}>
                        AUTOSERVICIO
                    </Typography>
                    <IconButton 
                        edge = "start"
                        color= "inherit"
                        aria-label = "menu"
                        onClick = {handleDrawerToggle}
                        sx = {{ display : { xs: 'block', md: 'none'} }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Box sx = {{ display: { xs: 'none', md: 'flex'} }}>
                        {['Home', 'Cursos', 'Usuarios', 'Mas Informacion'].map((text) => (
                            <Button color = "inherit" component = {LinkBehavior} to = {`/${normalizeText(text)}`} key = {text}>
                                {text}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
            <Drawer anchor = "left" open = {drawerOpen} onClose = {handleDrawerToggle}>
                {drawer}
            </Drawer>
        </>
    );
}
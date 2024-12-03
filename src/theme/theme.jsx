import { createTheme } from '@mui/material/styles';
import { Component } from 'react';

const theme = createTheme({
    palette: {
        primary: {
            main: '#39A900',
        },
        secondary: {
            main: '#007832',
        },
        error: {
            main: '#f44336',
        },
        background: {
            default: '#ffffff',
        },
    },
    typography: {
        frontFamily: 'Roboto, sans-serif',
        h1: {
            fontSize: '2.5rem',
        },
        h2: {
            fontSize: '2rem',
        },
        body: {
            fontSize: '1rem',
        },
    },
    spacing: 8,
    shape: {
        borderRadius: 8,
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1920,
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTrasform: 'none',
                },
            },
        },
    },
});

export default theme;
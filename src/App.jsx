import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemaProvider } from '@mui/material/styles';

import './App.css';
import Navbar from "./components/Navbar/Navbar";
import NavbarRoutes from "./routes/NavbarRoutes";
import Footer from "./components/footer/Footer";

import theme from "./theme/theme";

function App() {
    return (
        <ThemaProvider theme = {theme}>
            <Router>
                <Navbar />
                    <div className = "content">
                        <NavbarRoutes />
                    </div>
                    <Footer />
            </Router>
        </ThemaProvider>
    );
}

export default App;
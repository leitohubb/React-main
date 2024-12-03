import React from "react";
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className = "footer">
            <p> © {currentYear} AUTOSERVICIO. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
import React from "react";
import './footer.css';
import { Link } from "react-router-dom";
import linkedInIcon from "../../assets/linkedin.png";
import twitterIcon from "../../assets/twitter.png";
import facebookIcon from "../../assets/facebook.png";
import instagramIcon from "../../assets/instagram-sketched.png";
import logo from '../../assets/logo.png';
function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-left">
                <img src={logo} className="footer-logo" width="150" height="80"></img>
                    <p>
                    evlo is a low code, easy to use platform and app as a service using which any business
                        owner can get a fully functional, white labeled mobile e-commerce application 
                        for their business in less than minutes
                    </p>
                    <p>
                        info@arrow.com
                    </p>
                    <p>
                        Hyderabad
                    </p>
                    <p>
                    9966108838
                    </p>
                </div>
                <div className="footer-right">
                    <Link to='/' className="footer-link">Home</Link>
                    <Link to='/products' className="footer-link">Product</Link>
                    <Link to='/pricing' className="footer-link">Pricing</Link>
                    <Link to='/demo' className="footer-link">Demo</Link>
                    <Link to='/about' className="footer-link">About</Link>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <div className="copy-right">The Arrow. &copy; 2020 All Rights Reserved</div>
                    <div className="footer-bottom-right">
                        <img src={linkedInIcon} width="30" height="30"></img>
                        <img src={twitterIcon}  width="30" height="30"></img>
                        <img src={facebookIcon} width="30" height="30"></img>
                        <img src={instagramIcon} width="30" height="30"></img>
                    </div>
                    </div>
                </div>
        </footer>
    );
}

export default Footer;
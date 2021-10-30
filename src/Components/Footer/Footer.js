import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer-section'>
            <div>
                <h1>Thrifty Traveler</h1>
                <h4>Life is a journey, not a destination</h4>
            </div>
            <div className='our-links'>
                <h2>Quick Links</h2>
                <Link to='/aboutus'>About us</Link>
                <Link to='/contactus'>Contact us</Link>
                <Link to='/privacy'>Privacy & Policy</Link>
                <Link to='/blog'>Our Blog</Link>
            </div>
            <div>
                <h2>Follow Us</h2>
                <i class="fab fa-facebook fa-2x me-2"></i>
                <i class="fab fa-instagram fa-2x me-2"></i>
                <i class="fab fa-youtube fa-2x me-2"></i> 
            </div>
        </div>
    );
};

export default Footer;
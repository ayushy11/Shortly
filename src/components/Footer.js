import React from 'react';
import '../styles/Footer.css';
import icon1 from '../assets/icon-facebook.svg';
import icon2 from '../assets/icon-twitter.svg';
import icon3 from '../assets/icon-pinterest.svg';
import icon4 from '../assets/icon-instagram.svg';

function Footer() {
    return (
        <div className="footer">
            <div className="footer__left">
                <h1>Shortly</h1>
            </div>
            <div className="footer__right">
                <div className="footer__right1">
                    <h4>Features</h4>
                    <h3>Link Shortening</h3>
                    <h3>Branded Links</h3>
                    <h3>Analytics</h3>
                </div>
                <div className="footer__right2">
                    <h4>Resources</h4>
                    <h3>Blog</h3>
                    <h3>Developers</h3>
                    <h3>Support</h3>
                </div>
                <div className="footer__right3">
                    <h4>Company</h4>
                    <h3>About</h3>
                    <h3>Our Team</h3>
                    <h3>Careers</h3>
                    <h3>Contact</h3>
                </div>
                <div className="footer__right4">                    
                    <img src={icon1} />
                    <img src={icon2} />
                    <img src={icon3} />
                    <img src={icon4} />
                </div>
            </div>
            
        </div> 
    )
}

export default Footer;

import React from 'react';
import "./Footer.css"

const Footer = () => {
    return (
        <footer id="footer">
            <div className="grid grid-cols-3 gap-4">
                <div className="site-info">
                    Footer Left
                </div>
                <div className="quick-links">
                    Footer Middle
                </div>
                <div className="email-subscription">
                    Footer Right 
                </div>
            </div>
        </footer>
    );
};

export default Footer;



import React from 'react';
import "./Footer.css"
import logo from "../../img/logo.png";

const Footer = () => {
    return (
        <footer id="footer">
            <div className="container mx-auto">
                <div className="grid grid-cols-3 gap-4">
                    <div className="site-info">
                        <img src={logo} alt="" className="site-logo" />
                        <p className="footer-text">Development School is one of the leading skill development course provider about all kind of digital skill based on Bangladesh. We do care about our learners about their step by step development</p> 
                    </div>
                    <div className="quick-links">
                        <h4 className="footer-title">Our courses</h4>
                        <ul className="footer-list">
                            <li>Website Development</li>
                            <li>UI/UX Design</li>
                            <li>Facebook Marketing</li>
                            <li>Search Engine Optimization</li>
                            <li>Content Writing</li>
                        </ul>
                    </div>
                    <div className="contact-info">
                        <h4 className="footer-title">Contact Info</h4>
                        <ul className="footer-list">
                            <li>Email: info@crimsonsit.com</li>
                            <li>Contact Number: +8801912-579974 </li>
                        </ul>   
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;



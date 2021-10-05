import React from 'react';
import "./Header.css";
import Banner from "../../img/banner.png"

const Header = () => {
    return (
        <header id="header">
            <div className="grid grid-cols-2 gap-4 banner">
                <div className="container mx-auto content-column">
                    <h1 className="site-title">
                        Learn to <span>develop</span> 
                    </h1>
                    <p className="site-subtitle">With courses added regularly to our catalog, you always get the latest skills. Sale from $13.99 ends today.</p>
                    <button className="btn-explore">Explore Now</button>
                </div>
                <div className="iamge-column">
                    <img src={Banner} alt="" />
                </div>
            </div>
        </header>
    );
};




export default Header;
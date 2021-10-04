import React from 'react';
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    return (
        <section className="nav-section">
            <div className="container mx-auto ">
                <nav className="navbar">
                    <Link to="/">Home</Link>
                    <Link to="/courses">Courses</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </nav>
            </div>
        </section>
    );
};

export default Navbar;
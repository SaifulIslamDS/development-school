import React from 'react';
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    return (
        <section className="nav-section">
            <div className="container mx-auto ">
                <div className="grid grid-cols-3 gap-4">
                        <h2 className="text-5xl pt-6 text-yellow-400"><Link to="/">DevSchool</Link> </h2>
                    <div></div>
                    <nav className="navbar">
                        <Link to="/">Home</Link>
                        <Link to="/courses">Courses</Link>
                        <Link to="/about">About</Link>
                        <Link to="/contact">Contact</Link>
                    </nav>
                    
                </div>
            </div>
        </section>
    );
};

export default Navbar;
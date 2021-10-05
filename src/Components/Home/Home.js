import React from 'react';
import Header from '../Header/Header';
import Courses from '../Courses/Courses';
import "./Home.css";

const Home = () => {
    return (
        <div>
            <Header />
            <h2 className="text-5xl p-4 section-title">Featured courses</h2>
            <Courses />
        </div>
    );
};

export default Home;
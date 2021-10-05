import React from 'react';
import "./About.css"
import about from "../../img/about-us.jpg";
import who from "../../img/who-we-are.jpg";
import mission from "../../img/mission.jpg";
import vision from "../../img/vision.jpg";

const About = () => {
    return (
        <section className="container mx-auto about-us" >
            <div className="about-image">
                <img src={about} alt="" srcset="" />
            </div>
            <div className="grid grid-cols-3 gap-4">
                <div className="about-column">
                    <img src={who} alt="" srcset="" />
                    <h2>Who Are We</h2>
                    <p>An IT start-up committed to provide quality service.</p>
                </div>
                <div className="about-column">
                    <img src={mission} alt="" srcset="" />
                    <h2>Our Mission</h2>
                    <p>To gain customer satisfaction through good service.</p>
                </div>
                <div className="about-column">
                    <img src={vision} alt="" srcset="" />
                    <h2>What We Do</h2>
                    <p>Wide range of jobs from designing web presence to internet marketing.</p>
                </div>
            </div>
        </section>
    );
};

export default About;
import React from 'react';
import "./Course.css";

const Course = (props) => {
    const {name, insructor, description, price, img} = props.course;
    return (
        <div className="single-course">
            <img className="course-img" src={img} alt="" />
            <h2 className="course-title">{name}</h2>
            <p className="course-price">Price: $ {price}</p>
            <p className="course-ins">Instructor: <span>{insructor}</span></p>
            <p className="course-desc">{description}</p>
        </div>
    );
};

export default Course;
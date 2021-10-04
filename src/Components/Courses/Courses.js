import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';
import "./Courses.css";

const Courses = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch("/courses.json")
        .then(res => res.json())
        .then(data => setCourses(data))
    }, []);

    return (
        <section className="courses-section">
            <div className="container mx-auto">
                <h2 className="text-5xl p-4">Some of award winning courses</h2>
                <div className="grid grid-cols-3 gap-4">
                    {
                    //loop through courses with map method
                    courses.map(course => <Course 
                        key={course.key}
                        course={course}
                        ></Course> )
                    }
                </div>
            </div>
        </section>
    );
};

export default Courses;
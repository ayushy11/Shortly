import React from 'react';
import '../styles/About.css';
import Button1 from './Button1';

function About() {
    return (
        <div className="about">
            <h1>Boost your links today</h1>
            <div className="about__button">
                <Button1 name="Get Started" />
            </div>
        </div>
    )
}

export default About;

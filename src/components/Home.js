import React from 'react';
import '../styles/Home.css';
import Button1 from './Button1';
import working from '../assets/working.svg';

function Home() {
    return (
        <div className="home">
            <div className="home__left">                
                <h1>More than just shorter links</h1>
                <h2>Build your brand recognition and get detailed insights on how your links are performing.</h2>
                <Button1 name="Get Started"/>
            </div>
            <div className="home__right">
                <img src={working} alt=""/>
            </div>
        </div>
    )
}

export default Home

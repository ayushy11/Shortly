import React from 'react';
import '../styles/Section.css';
import Card from './Card';
import img1 from '../assets/icon-brand.svg';
import img2 from '../assets/icon-records.svg';
import img3 from '../assets/icon-custom.svg';

function Section() {
    return (
        <>
            <div className="section">
                <div className="section__title">
                    <h2>Advanced Statistics</h2>
                    <p>Track how your links are performing across the web with our advanced statistics dashboard.</p>
                </div>
            </div>
            <div className="section__cards">
                <div className="section__card1">
                    <Card title="Brand Recognition" content="Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content."
                    img={img1} />
                </div>
                <div className="section__card2">
                    <Card title="Detailed Records" content="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions." 
                    img={img2}
                    />
                </div>
                <div className="section__card3">
                    <Card title="Fully Customizable" content="Improve brand awareness and content recoverability through customizable links, supercharging audience engagement."
                    img={img3} />
                </div>
            </div>
        </>
    )
}

export default Section

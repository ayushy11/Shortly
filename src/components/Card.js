import React from 'react';
import '../styles/Card.css';

function Card({ title, content, img }) {
    return (
        <div className="card">
            <div className="card__img">
                <img src={img} alt="" />
            </div>
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
    )
}

export default Card

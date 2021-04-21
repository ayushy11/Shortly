import React from 'react';
import '../styles/Url.css';

function Url({ key, value, link }) {
    return (
        <div className="url">
            <span>{value}</span>
            <a href={link} target="_blank" rel="noopener noreferrer">{link}</a>
            <button>Copy</button>
        </div>
    )
}

export default Url;

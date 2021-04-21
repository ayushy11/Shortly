import React from 'react';
import '../styles/Button.css';

function Button({ name }) {
    return (
        <div className="button">
            <a className="button__main">
                {name}
            </a>
        </div>
    )
}

export default Button;

import React from 'react'
import '../styles/Button1.css';

function Button1({ name }) {
    return (
        <div className="button1">
            <a className="button1__main">
                {name}
            </a>
        </div>
    )
}

export default Button1

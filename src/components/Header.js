import React from 'react';
import '../styles/Header.css';
import logo from '../assets/logo.svg';
import Button from './Button';
import Button1 from './Button1';

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <img src={logo} alt=""/>
                <h3>Features</h3>
                <h3>Pricing</h3>
                <h3>Resources</h3>
            </div>
            <div className="header__right">
                <Button name="Login"/>
                <Button1 name="Sign up"/>
            </div>
        </div>
    )
}

export default Header

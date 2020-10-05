import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../resources/logos/Group 1329.png'

const HeaderTwo = () => {
    return (
        <div className="Container">
            <nav className="navbar navbar-expand-lg">
                <Link to="/">
                    <img src={logo} alt="logo" className="mr-5 bg-img-color center"/>
                </Link>
            </nav>
        </div>
    );
};

export default HeaderTwo;
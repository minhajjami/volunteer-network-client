import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../resources/logos/Group 1329.png'
import { UserContext } from '../../App';

const Header = () => {
    const [loggedInUser] = useContext(UserContext);
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg">
                <Link to="/">
                    <img src={logo} alt="logo" className="mr-5 bg-img-color" />
                </Link>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Donation</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/event">Events</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Blog</Link>
                        </li>
                        {
                            loggedInUser.email ? <>  <li className="ml-2"><strong className="text-warning">{loggedInUser.name}</strong></li>
                                <Link to="/admin"><li className="ml-2"><button className="btn btn-secondary">Admin</button></li></Link></>
                                :
                                <>
                                    <li className="ml-2"><button className="btn btn-primary">Register</button></li>
                                    <Link to="/admin"><li className="ml-2"><button className="btn btn-secondary">Admin</button></li></Link>
                                </>
                        }
                    </ul>
                </div>
            </nav>
        </div>
    );
};
export default Header;
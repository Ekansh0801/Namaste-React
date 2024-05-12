import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
    const [loggedIn,setLoggedIn] = useState(false);
    return (
        <div className="header">
            <div className="logo-container">
                <Link to="/"><img className="logo" src={LOGO_URL} alt="Logo" /></Link>
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li>Cart</li>
                    <button className="login" onClick={() =>{setLoggedIn(!loggedIn)}}>{loggedIn ? "Log Out": "Log In"}</button>
                </ul>
            </div>
        </div>
    );
};

export default Header;
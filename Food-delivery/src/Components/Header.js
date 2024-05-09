import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
    const [loggedIn,setLoggedIn] = useState(false);
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} alt="Logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>Cart</li>
                    <button className="login" onClick={() =>{setLoggedIn(!loggedIn)}}>{loggedIn ? "Log Out": "Log In"}</button>
                </ul>
            </div>
        </div>
    );
};

export default Header;
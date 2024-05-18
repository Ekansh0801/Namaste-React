import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
    const onlineStatus = useOnlineStatus();
    const [loggedIn,setLoggedIn] = useState(false);
    const data = useContext(UserContext);

    //subscribing to store
    const cartItems = useSelector((store) => store.cart.items)

    return (
        <div className="flex justify-between bg-pink-100 shadow-lg">
            <div className="logo-container">
                <Link to="/"><img className="w-56 bg-pink-400" src={LOGO_URL} alt="Logo" /></Link>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4"><Link to="/about">About Us</Link></li>
                    <li className="px-4"><Link to="/contact">Contact</Link></li>
                    <li className="px-4"><Link to="/grocery">Grocery</Link></li>                    
                    <li className="px-4 font-bold text-xl"><Link to="/cart">Cart ({cartItems.length} items)</Link></li>
                    <button className="login mr-4" onClick={() =>{setLoggedIn(!loggedIn)}}>{loggedIn ? "Log Out": "Log In"}</button>
                    <li className="font-bold">{data.loggedInUser}</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
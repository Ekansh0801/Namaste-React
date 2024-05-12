import { useState } from "react";

const User = (props) => {
    const[count] = useState(0);
    const[count2] = useState(2);
    const {name,location} = props;
    return(
        <div className="user-card">
        <h1>{count}</h1>
        <h1>{count2}</h1>
         <h2>Name: {name}</h2>
         <h3>Location: {location}</h3>
         <h4>Contact:@ekanshnovember1</h4>
        </div>
    );
};

export default User;
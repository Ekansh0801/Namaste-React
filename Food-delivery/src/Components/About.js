import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component{
    constructor(props){
        super(props);
        console.log('parent contructoe')
    }
    componentDidMount(){
        console.log('Parent Mounted')
        //this method is used to make api calls same as useEffect()

    }
    render(){
        console.log('paret render');
        return (
            <div>
            <h1>About</h1>
            <h2>This is Namaste React Webseries</h2>
            {/* <User name={"Ekansh (function)"} location={"Rishikesh(function)"}/> */}
            <UserClass name={"Ekansh (class)"} location={"Rishikesh(class)"}/>
        </div>
        )

    }
}

export default About;

//for more than 2 children of a class based component
//react does some optimization 
//assumption
// parent contructor
// parent render

// -first child contructor
// -first child render
// -first child componentDidMount

// -secondd child contructor
// -sdecond child render
// -sdecond child componentDidMount

// parentd componentDidMount

// but correct

// parent contructor
// parent render

// -first child contructor
// -first child render

// -secondd child contructor
// -sdecond child render

// -first child componentDidMount
// -sdecond child componentDidMount

// parentd componentDidMount

// react does some optimzation here manipulating dom as cycle is contructor -> render - (DOM manipulation) -> componentDidMount
// as DOM updation is expensive task so it matches render phase of all child thats why this is output

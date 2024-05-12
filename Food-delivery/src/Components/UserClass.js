import React from "react";

class UserClass extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            // count:0,
            // count2:2,
            userInfo:{
                namey:"Dummy",
                locationy:"Default",
                avatar_url:""
            }
        }
        console.log('child consstructor')
    }
    async componentDidMount(){
        console.log('child mounted!!');
        const data = await fetch("https://api.github.com/users/Ekansh0801")
        const json = await data.json();
        console.log(json);        
        this.setState({
            userInfo:json,
        })
    }

    render(){
        // const {name,location} = this.props; 
        const {count,count2} = this.state;
        console.log('children render!');
        const {name,location,avatar_url} = this.state.userInfo; 
        return(
            <div className="user-card">
             {/* <h1>{count}</h1>
             <button onClick={() => {
                //never pdate state variables directly
                this.setState({
                    count:this.state.count + 1,
                    count2:this.state.count2 + 1
                })
             }}>Count Increase</button> */}
             {/* <h1>{count2}</h1> */}
             <img src={avatar_url} alt="Profile-Pic"/>
             <h2>Name: {name}</h2>
             <h3>Location: {location}</h3>
             <h4>Contact:@ekanshnovember1</h4>
            </div>
        );
    }
}

export default UserClass;
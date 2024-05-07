import React from "react";
import ReactDOM from "react-dom/client"

//React.createElement => Object => after rendering => HTML element

const heading = React.createElement("h1",{id:"heading"},"namaste react");
console.log(heading); //Object

// This thing is hard to write if many components so developers build React
// JSX file (Transpiled before reaching JS engine) Done By Babel (Explore Babel Website)
//JSX => React.createElement => ReactElement- JS Object => HTML Element(After rendering)
//React element
const jsxHeading = (
<h1 id="heading" className="head">Namaste React Using JSX</h1>
) //This is not a valid JS syntax as JS is based on ES6 but this is working fine due to Parcel package
console.log(jsxHeading);  //Object

//both are same things eventually making a react element


// React Components



//Class Based Components - OLD
//Functional Based Components - NEW

//we can write js elements inside React component also and also can do calculations
const number = 1000
const Title = () => (
    <h1 className = "head">
    {number}
    {100 + 200}
    Namaste React using JSX
    </h1>
) 


const HeadComponent = () => (
    <div id="container">
    <Title/>
    <h1 className="heading">Namaste React Functional Components</h1>
    </div>
)

const HeadingComponent2 = () => (
     <div id="container">
     <h1>React component!!</h1>
     </div>

)

//Both are same

const root = ReactDOM.createRoot(document.getElementById("root"));

//rendering a react element
root.render(jsxHeading);

//rendering a react component
root.render(<HeadComponent/>)



# Key in Map

In react when we iterate over a iterable through loop(for loop or map) then Best Practice is to pass a unique key everytime this is so because if
we will not use unique key on adding a new elemenent all the elements will be rendered again but if we use key only the new element will be renderd so it for optimization and we can use index also as a key but it is not recommended

          {
            resList.map((restaurant) => (
                <RestaurantCard key = {restaurant.info.id} resData = {restaurant}/>
            ))
          }

          using index as key
            {
            resList.map((restaurant,index) => (
                <RestaurantCard key = {index} resData = {restaurant}/>
            )) 
          }

          not using key(unaceeptable) <<<<<<<<<<<<<< using indexes as key <<<<<<<<<<<<<< using unique key


# Two Types of Exports          

- Default Export/Import (When we have to export single component in a file)

export default Component
import Component from "path";

- Named Export/Import (when we have to export more than one components from a single file)

export const Component
import {Component} from "path;

# React Hooks
(Normal JS Utility Functions)

- useState() - SuperPowerful State Variables in React
- useEffect() - 

# useState() Hook
when a state variable is declared using useState hook and that varibale is updated by any event then the parent component containing that varibale is rendered again not the whle page is rendered again

eg we used login button inside header component then only header component is rendered again other fellow components eg body and footer have no effect

- When a component is rendered again then according to this    

 const [loggedIn,setLoggedIn] = useState(false);

 variable again will be assigned to same value but thats not true

 The initial value of the loggedIn state variable is indeed set to false when the component is first rendered. However, when the component re-renders due to a state update (e.g., when the "Log In/Log Out" button is clicked), React re-executes the entire functional component body, including the call to useState.

Even though useState is called again on every render, React maintains the state between re-renders. It does this by associating each state variable with the component instance. When the component re-renders, React ensures that the state variable (loggedIn in this case) maintains its value across renders, unless explicitly updated by calling the setter function (setLoggedIn).

So, while useState(false) is called each time the component renders, React internally handles the preservation of state values across renders. This mechanism allows React components to reflect state changes accurately and efficiently without losing state between renders.

# useEffect 
- No dependency array
when useEffect is called without passing dependency array useEffect is called each time the component is rendered
- If empty dependency array
when useEffect is called with empty dependency array the useEffect is called only after first render (only once) not again and again
- If Dependency araay contains a variable
when UseEffect is called with dependency array containing an varibale then each time that varibale(dependency) changes useEffect will be called
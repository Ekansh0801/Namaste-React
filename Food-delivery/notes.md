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

# Custom Hooks
the main goal of a react component is to just render what we want to show on the page so the code of that component must only contain the rendering code and hence we dont need to show api calls in the same file so to increase readibility we uses custom hooks for doing these extra things outside out component file 

- code
import { useState, useEffect } from 'react';
 - Example 1
const useRestaurantList = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    fetchData(); 
    
  },[]);

  const fetchData = async () => {
    try {
      const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.3222028&lng=77.3410569&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
      const json = await data.json();
      console.log(json);
      const restaurants = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

      if (restaurants) {
        setListOfRestaurants(restaurants);
        setFilteredRestaurant(restaurants);
        setLoading(false); // Update loading state when data is fetched
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return {
    listOfRestaurants,
    filteredRestaurant,
    setFilteredRestaurant,
    loading // Return loading state
  };
};

export default useRestaurantList;

- Example 2

import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {

    const [resInfo,setResInfo] = useState(null);

    //fetch data
    useEffect(() => {
        fetchData();
    },[])

     const fetchData = async() => {
        const data = await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.3381968&lng=77.33973139999999&restaurantId='+resId+'&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER');
        const json = await data.json(); 
        setResInfo(json.data);       
    }

    return resInfo;
}

export default useRestaurantMenu

# Optimization
when the website is build for production the whole js compnents load and combine in a single file this will eventually increase the size of bundle 
and will make our website slow so we use the concept of az loading to avoid this the compnent when reuired only then is called this created different bundles nt increasing burden on just one eventually making it fast
- code 

import React,{lazy,Suspense} from "react";

const Grocery = lazy(() => import("./Components/Grocery"));

            {
                path:"/grocery",
                element:
                    <Suspense fallback = {<Shimmer/>}>
                        <Grocery/>
                    </Suspense>
            },

# High order functions
export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
        return(
            <div>
            <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
            <RestaurantCard {...props}/>                
            </div>
        )
    }
}

# controleed component and state lifting

import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex(); // Toggle the showIndex state to expand or collapse the category

  };

  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
        {/* Category Header */}
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick} // Call handleClick to toggle showIndex
        >
          <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
          <span>{showItems ? "⬆" : "⬇"}</span>
        </div>
        {/* Category Body */}
        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;

        {/* {accordian} */}
        {/* //controlled component */}
        {categories.map((category,index) => (<RestaurantCategory key={category?.card?.card?.title} data = {category?.card.card} showItems={index === showIndex && true} setShowIndex={() => setShowIndex(index)}/>))}

# Context API
        import { createContext } from "react";

const UserContext = createContext({
    loggedInUser:"Default User",

})

export default UserContext


    const [userName,setUserName] = useState();

    useEffect(() => {
        const data = {
            name:"Ekansh Aggarwal",
        }
        setUserName(data.name);
    },[])
    return (
        <UserContext.Provider value={{loggedInUser:userName,setUserName}}>
        <div className="app">
            {/* Header */}
            <Header/>
            {/* Body */}
            <Outlet/>
            {/* Footer */}
        </div>            
        </UserContext.Provider>
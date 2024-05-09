import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import {useState,useEffect} from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants,setListOfRestaurants] = useState([]);
  const [filteredRestaurant,setFilteredRestaurant] = useState([]);
  const [searchText,setSearchText] = useState("");

   useEffect(() => {
    console.log("UseEffect Called!!!");
    fetchdata();
   },[]);
   console.log("Rendered!!!");

   const fetchdata = async () => {
     const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.3222028&lng=77.3410569&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');

     const json = await data.json();
     console.log(json);
     //optional chaining
     setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
     setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
   }
   if(listOfRestaurants.length === 0){
    return(<Shimmer/>);
   };

    return(
        <div className="body">
          <div className="filter">
           <div className="search">
            <input type="text" className="search-box" value={searchText} onChange={(e) => {setSearchText(e.target.value)}}/>
            <button onClick={() => {
              setFilteredRestaurant(listOfRestaurants.filter((res) => (
                res.info.name.toLowerCase().includes(searchText.toLowerCase())

                )));
            }}>Search</button>
           </div>
            <button className="filter-btn" onClick={() => {
              setFilteredRestaurant(filteredRestaurant.filter((res) => res.info.avgRating > 4))
            }}>Top Rated Restaurants</button>
          </div>
          <div className="res-container">
          {
            filteredRestaurant.map((restaurant) => (
                <RestaurantCard key = {restaurant.info.id} resData = {restaurant}/>
            ))
          }
          </div>
        </div>
    );
};

export default Body
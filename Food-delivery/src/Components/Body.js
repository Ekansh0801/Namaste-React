import React, { useState, useEffect,useContext } from 'react';
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurantList from "../utils/useRestaurantList";
import Shimmer from "./Shimmer";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { Link } from "react-router-dom";
import UserContext from '../utils/UserContext';

const Body = () => {
  const onlineStatus = useOnlineStatus();
  const { listOfRestaurants, filteredRestaurant, setFilteredRestaurant, loading } = useRestaurantList();
  const [searchText, setSearchText] = useState("");
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  console.log("Body component rendered");
  console.log("Loading:", loading);
  console.log("Online Status:", onlineStatus);
  console.log("Filtered Restaurants:", filteredRestaurant);

  if (loading) {
    return <Shimmer />;
  }

  if (!onlineStatus) {
    return <h1 className='flex justify-center items-center'>Looks like you are offline, please check your internet connection!!</h1>;
  }
  const {loggedInUser,setUserName} = useContext(UserContext)

  return (
    <div className="body">
      <div className="flex ">
        <div className="m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button className='bg-green-100 m-4 px-4 py-2 rounded-lg' onClick={() => {
            setFilteredRestaurant(listOfRestaurants.filter((res) => (
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            )));
          }}>Search</button>
        </div>
        <div className="m-4 p-4 flex items-center">
          <button className="bg-gray-100 px-4 py-2 rounded-lg" onClick={() => {
            setFilteredRestaurant(filteredRestaurant.filter((res) => res.info.avgRating > 4));
          }}>Top Rated Restaurants</button>
        </div>
        <div className='flex items-center m-4 p-4 '>
        <label className='m-4'>Username</label>
        <input className='border border-solid border-black px-4' value={loggedInUser} onChange={(e) => setUserName(e.target.value)}/>
        </div>
      </div>
      <div className="flex flex-wrap rounded-lg justify-center items-center">
        {filteredRestaurant.map((restaurant) => (
          <Link key={restaurant.info.id} to={"/restaurant/" + restaurant.info.id}>
            {restaurant.info.promoted ? <RestaurantCardPromoted resData={restaurant} /> : <RestaurantCard resData={restaurant} />}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;

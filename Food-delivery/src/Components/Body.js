import React from 'react';
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurantList from "../utils/useRestaurantList";
import Shimmer from "./Shimmer";
import RestaurantCard from "./RestaurantCard";
import { Link } from "react-router-dom";
import { useState } from 'react';

const Body = () => {
  const onlineStatus = useOnlineStatus();
  const { listOfRestaurants, filteredRestaurant, setFilteredRestaurant, loading } = useRestaurantList();
  const [searchText, setSearchText] = useState("");

  if (loading) {
    return <Shimmer />;
  }

  if (!onlineStatus) {
    return <h1>Looks like you are offline, please check your internet connection!!</h1>;
  }

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
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
        {filteredRestaurant.map((restaurant) => (
          <Link key={restaurant.info.id} to={"/restaurant/" + restaurant.info.id}>
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;

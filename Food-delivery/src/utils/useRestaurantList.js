import { useState, useEffect } from 'react';

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

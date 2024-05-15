import { useState, useEffect } from 'react';

const useRestaurantList = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('Component mounted, fetching data...');
    fetchData();
  }, []); // Empty dependency array to fetch data on mount

  const fetchData = async () => {
    try {
      const response = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.3222028&lng=77.3410569&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
      const json = await response.json();
      console.log('Fetched data:', json);

      const restaurants = json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants || json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;;
      
      if (restaurants) {
        setListOfRestaurants(restaurants);
        setFilteredRestaurant(restaurants);
      } else {
        console.error("Restaurants data is not available");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  return {
    listOfRestaurants,
    filteredRestaurant,
    setFilteredRestaurant,
    loading
  };
};

export default useRestaurantList;

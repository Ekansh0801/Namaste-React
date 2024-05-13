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

export default useRestaurantMenu;
import { useState } from "react";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import Shimmer from "./Shimmer";
import {useParams} from "react-router-dom";

const RestaurantMenu = () => {

    const {resId} = useParams();
    const [showIndex,setShowIndex] = useState(null);
    
    //This fetch data logic as a good practice should not be hown here we should only use this component for displaying restaurant menu so lets make a custom hook for fetching data;

    // useEffect(() =>{
    //     fetchMenu();
    // },[])

    // const fetchMenu = async() =>{
    //     const data = await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.3381968&lng=77.33973139999999&restaurantId='+resId+'&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER');
    //     const json = await data.json();
    //     console.log(json.data);
    //     setResInfo(json.data);
    // };

    const resInfo = useRestaurantMenu(resId);
    console.log("resinfo")
    console.log(resInfo)
    if(resInfo === null) return (<Shimmer/>)
    const {name,cuisines,cloudinaryImageId,costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;

    // const {itemCards} = resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;
    // console.log(resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards);
    let catList;
if (resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards) {
    catList = resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards;
} else if (resInfo.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards) {
    catList = resInfo.cards[5].groupedCard.cardGroupMap.REGULAR.cards;
}
    console.log("catlist")
    console.log(catList);
    const categories = catList.filter((c) => (
        c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ))
    console.log(categories);
    if(categories === undefined){
        return (
            <div>
             <h1>{name}</h1>
             <p>{cuisines.join(', ')} {"-"} {costForTwoMessage}</p>
             <h3>Menu</h3>
             <div>
                No items to show a Moment
             </div>                
            </div>
        )
    }
    return (
        <div className="text-center">
        <h1 className="font-bold my-6 text-2xl">{name}</h1>
        <p className="font-bold text-lg">{cuisines.join(', ')} {"-"} {costForTwoMessage}</p>
        {/* {accordian} */}
        {/* //controlled component */}
        {categories.map((category,index) => (<RestaurantCategory key={category?.card?.card?.title} data = {category?.card.card} showItems={index === showIndex && true} setShowIndex={() => setShowIndex(index)}/>))}
        </div>
    )
}
export default RestaurantMenu;
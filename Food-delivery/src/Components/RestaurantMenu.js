import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import {useParams} from "react-router-dom";

const RestaurantMenu = () => {

    const [resInfo,setResInfo] = useState(null);

    const {resId} = useParams();
    
    useEffect(() =>{
        fetchMenu();
    },[])

    fetchMenu = async() =>{
        const data = await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.3381968&lng=77.33973139999999&restaurantId='+resId+'&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER');
        const json = await data.json();
        console.log(json.data);
        setResInfo(json.data);
    };
    if(resInfo === null) return (<Shimmer/>)
    const {name,cuisines,cloudinaryImageId,costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;

    const {itemCards} = resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;
    console.log(itemCards);
    if(itemCards === undefined){
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
        <div className="menu">
        <h1>{name}</h1>
        <p>{cuisines.join(', ')} {"-"} {costForTwoMessage}</p>
        <h3>Menu</h3>
        <ul>
            {itemCards.map((item) => (
                <li key ={item.card.info.id}>{item.card.info.name} - {" Rs."} {item.card.info.price/100 || item.card.info.defaultPrice/100}</li>
            ))} 
        </ul>
        </div>
    )
}
export default RestaurantMenu;
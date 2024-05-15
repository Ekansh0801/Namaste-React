import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {resData} = props;

    const {name,cuisines,avgRating,costForTwo,cloudinaryImageId,locality,areaName} = resData?.info
    const {deliveryTime} = resData?.info?.sla
    return(
        <div className="m-4 p-4 w-[250px] bg-gray-100 hover:bg-gray-200">
        <img className="food-img rounded-lg" alt="Paneer" src= {CDN_URL +cloudinaryImageId}/>
        <h3 className="font-bold py-4 text-lg">{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating}</h4>
        <h4>{costForTwo}</h4>
        <h4>{deliveryTime} Minutes</h4>
        <h4>{locality}</h4>
        <h4>{areaName}</h4>
        </div>
    )
}


//Higher order function
//input restaurant card and output is restaurant card with prooted flag

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

export default RestaurantCard
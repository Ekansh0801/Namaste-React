import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {resData} = props;

    const {name,cuisines,avgRating,costForTwo,cloudinaryImageId,locality,areaName} = resData?.info
    const {deliveryTime} = resData?.info?.sla
    return(
        <div className="res-card">
        <img className="food-img" alt="Paneer" src= {CDN_URL +cloudinaryImageId}/>
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating}</h4>
        <h4>{costForTwo}</h4>
        <h4>{deliveryTime} Minutes</h4>
        <h4>{locality}</h4>
        <h4>{areaName}</h4>
        </div>
    )
}

export default RestaurantCard
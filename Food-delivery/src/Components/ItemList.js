import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({items}) => {
    console.log(items);
    const dispatch = useDispatch();
    const handleAddItem = (item) => {
        //dispatch an action
        dispatch(addItem(item))
    }
    return (
        <div>
        {
            items.map((item) => (
                <div key={item.card.info.id} className="m-2 p-2 border border-black border-b-2 text-left flex justify-between">
                <div className="w-9/12">
                <div className="py-2">
                <span className="font-semibold">{item.card.info.name}</span>
                <span className="font-semibold"> - ₹ {item.card.info.price ? item.card.info.price/100 : item.card.info.defaultPrice/100}</span>                
                </div>
                <p className="text-sm">{item.card.info.description}</p>
                </div>
                <div className="w-3/12"> 
                <div className="absolute">
                <button className="p-2 mx-16 rounded-lg bg-white shadow-lg " onClick={() => handleAddItem(item)}>Add +</button>        
                </div>
                <img src={CDN_URL + item.card.info.imageId} className="w-40 p-4"/> 
                </div>
                </div>
            ))
        }
        </div>
    )
}
export default ItemList
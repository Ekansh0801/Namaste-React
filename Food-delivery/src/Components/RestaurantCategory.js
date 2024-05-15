import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex(); // Toggle the showIndex state to expand or collapse the category

  };

  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
        {/* Category Header */}
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick} // Call handleClick to toggle showIndex
        >
          <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
          <span>{showItems ? "⬆" : "⬇"}</span>
        </div>
        {/* Category Body */}
        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
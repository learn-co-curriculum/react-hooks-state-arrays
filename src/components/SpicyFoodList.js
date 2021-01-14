import React, { useState } from "react";
import { spicyFoods, getNewSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);

  function handleAddFood() {
    const newFood = getNewSpicyFood();
    console.log(newFood);
  }

  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{/* list of spicy foods */}</ul>
    </div>
  );
}

export default SpicyFoodList;

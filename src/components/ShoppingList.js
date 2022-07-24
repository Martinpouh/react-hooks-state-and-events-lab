import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleselectedCategory = (e) =>
    setSelectedCategory((selectedCategory) => (selectedCategory = e.target.value));

  const itemsArr =
    selectedCategory !== "All" ? items.filter((item) => item.category === selectedCategory) : items;

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={(e) => handleselectedCategory(e)} value={selectedCategory}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemsArr.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
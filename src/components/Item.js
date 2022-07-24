import React, { useState } from "react";

function Item({ name, category }) {
  const [cart, setCart] = useState(false);
  const handleCart = () => setCart(!cart);

  const btnTxt = cart ? "Remove from Cart" : "Add to Cart";
  const itemClass = cart ? "in-cart" : "";

  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleCart}>
        {btnTxt}
      </button>
    </li>
  );
}

export default Item;
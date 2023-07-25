import React, { useState } from "react";
//  defines a functional component called Item, which accepts two props: name and category
function Item({ name, category }) {
// The initial value of isInCart is set to false
  const [isInCart, setIsInCart] = useState(false);

  function handleAddToCartClick() {
// When the button is clicked, this function is called, and it uses the setIsInCart function to toggle the value of isInCart
//  If isInCart is false, it will be set to true
    setIsInCart((isInCart) => !isInCart);
  }

  return (
 // The <li> element represents a list item, and its class name is conditionally set to "in-cart" when the item is in the cart (isInCart is true).
    <li className={isInCart ? "in-cart" : ""}>
      <span>{name}</span>    
      <span className="category">{category}</span>
   {/* "Add to Cart" or "Remove from Cart" text based on the value of isInCart*/} 
      <button
        className={isInCart ? "remove" : "add"}
        onClick={handleAddToCartClick}
      >
        {isInCart ? "Remove From" : "Add to"} Cart
      </button>
    </li>
  );
}

export default Item;
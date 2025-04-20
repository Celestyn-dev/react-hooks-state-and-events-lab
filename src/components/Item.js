import React, { useState } from "react";

function Item({ name, category }) {
  const [isInCart, setIsInCart] = useState(false);

  function handleAddToCartClick() {
    setIsInCart((prev) => !prev);
  }

  const liClass = isInCart ? "in-cart" : "";
  const buttonClass = isInCart ? "remove" : "add";
  const buttonText = isInCart ? "Remove From Cart" : "Add to Cart";

  return (
    <li className={liClass} data-testid="item">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button
        className={buttonClass}
        onClick={handleAddToCartClick}
        data-testid="add-to-cart-button"
      >
        {buttonText}
      </button>
    </li>
  );
}

export default Item;

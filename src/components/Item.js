import React, {useState} from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false);

  function handleClick(){
    if(inCart){
      setInCart(false);
    } else {
      setInCart(true);
    }
  }

  return (
    <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={inCart ? "in-cart" : ""} onClick={handleClick}>{inCart ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;

import React, {useState} from "react";
import Item from "./Item";

//>>>selectedCategory variable will keep track of the select tag value

//use selectedCategory to determine which items to display in the sopping list.
  //use .filter()to filter based on the selected Category.

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("");

  function handleChange(event){
    setSelectedCategory(event.target.value);
  };


  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {items
          .filter(item => selectedCategory === "" || item.category === selectedCategory);
          .map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;

import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [appClass, setAppClass] = useState("light");

  function handleClick() {
    setAppClass(appClass === "light" ? "dark" : "light");
  }

  return (
    <div className={`App ${appClass}`}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClick}>
          {appClass === "light" ? "Dark Mode" : "Light Mode"}
        </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;

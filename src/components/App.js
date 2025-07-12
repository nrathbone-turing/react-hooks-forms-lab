import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";
import ItemForm from "./ItemForm";
import itemData from "../data/items";

function App() {
  const [items, setItems] = useState(itemData);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [search, setSearch] = useState(""); // ✨
  const [selectedCategory, setSelectedCategory] = useState("All"); // ✨

  // Implement event handler for changing categories
  function handleCategoryChange(e) {
    setSelectedCategory(e.target.value); // ✨
  }

  // Implement event handler to update the list when a new item is added
  function handleItemFormSubmit(newItem) {
    setItems([...items, newItem]);
    setSearch(""); // ✨
    setSelectedCategory("All"); // ✨
  }

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
      <ItemForm onItemFormSubmit={handleItemFormSubmit} />
      <ShoppingList
        items={items}
        search={search}
        onSearchChange={setSearch}
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />
    </div>
  );
}

export default App;
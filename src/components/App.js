import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";
import Filter from "./Filter";
import ItemForm from "./ItemForm";
import itemData from "../data/items";

function App() {
  const [items, setItems] = useState(itemData);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Implement event handler for changing categories
  function handleCategoryChange(e) {
    setSelectedCategory(e.target.value);
  }

  // Implement event handler to update the list when a new item is added
  function handleItemFormSubmit(newItem) {
    // updates the list immutably (passing a new array to the state setter function instead of mutating the original array)
    setItems([...items, newItem]); 
  }

  // additional support for typing in the input text box to filter results
  const filteredItems = items
    .filter((item) =>
      item.name.toLowerCase().includes(searchText.toLowerCase())
    )
    .filter((item) =>
      selectedCategory === "All" ? true : item.category === selectedCategory
    );

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
      <ShoppingList items={filteredItems} />
      <ItemForm onItemFormSubmit={handleItemFormSubmit} />
      <Filter
        searchText={searchText}
        onSearchChange={setSearchText}
        onCategoryChange={handleCategoryChange}
      />
    </div>
  );
}

export default App;

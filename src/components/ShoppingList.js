import React from "react";
import Item from "./Item";
import Filter from "./Filter";

function ShoppingList({
  items,
  search = "", // default to empty string
  onSearchChange = () => {}, // default to noop
  selectedCategory = "All", //default to All
  onCategoryChange = () => {}, //default to noop
}) {
  // ✨ filter logic
  const filteredItems = items
    .filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    )
    .filter((item) =>
      selectedCategory === "All" ? true : item.category === selectedCategory
    );

  return (
    <div className="ShoppingList">
      <Filter
        search={search}
        onSearchChange={onSearchChange}
        onCategoryChange={onCategoryChange}
      />
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;

import React from "react";

function Filter({ 
  search ="", //default to empty string
  onSearchChange = () => {}, //default to noop
  onCategoryChange = () => {} //default to noop 
}) {
  return (
    <div className="Filter">
      <input 
        type="text" 
        name="search" 
        placeholder="Search..." 
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
      />
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;

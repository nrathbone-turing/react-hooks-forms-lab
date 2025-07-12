import React, { useState } from "react";
import { v4 as uuid } from 'uuid';

function ItemForm({ onItemFormSubmit }) {
  // Controlled input states
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Produce"); //Defaults to Produce
  
  // event handler for form submission
  function handleSubmit(e) {
    e.preventDefault(); // prevent default page refresh behavior upon submit

    const newItem = {
      id: uuid(), // the `uuid` library can be used to generate a unique id
      name: name,
      category: category,
    };

    onItemFormSubmit(newItem); 

    // Reset form after submission
    setName("");
    setCategory("Produce");
  }
  
  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input 
          type="text" 
          name="name"
          value={name} // controlled
          onChange={(e) => setName(e.target.value)} // updates state
        />
      </label>

      <label>
        Category:
        <select 
          name="category"
          value={category} // controlled
          onChange={(e) => setCategory(e.target.value)} // updates state
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;

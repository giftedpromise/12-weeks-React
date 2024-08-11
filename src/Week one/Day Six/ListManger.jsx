{
  /*
    Practice Exercise:
Create a component that demonstrates:

Displaying a List:

Render a list of items using .map() and include a unique key for each list item.
Adding and Removing Items:

Implement functions to add and remove items from the list, ensuring the state is updated correctly.
Handling Dynamic Changes:

Test the component by adding and removing items, and observe how the list updates.

Modify the component to allow editing existing items.
Implement sorting or filtering functionalities.
Experiment with unique IDs as keys to improve list handling.
    */
}

import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid"; // Import uuid library

const ListManager = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState("");
  const [filter, setFilter] = useState("");

  const addItem = () => {
    if (newItem.trim() === "") return;
    setItems([...items, { id: uuidv4(), text: newItem }]);
    setNewItem("");
  };

  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const startEditing = (index) => {
    setEditIndex(index);
    setEditValue(items[index].text);
  };

  const saveEdit = () => {
    setItems(
      items.map((item, index) =>
        index === editIndex ? { ...item, text: editValue } : item
      )
    );
    setEditIndex(null);
    setEditValue("");
  };

  const handleSort = () => {
    setItems([...items].sort((a, b) => a.text.localeCompare(b.text)));
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredItems = items.filter((item) =>
    item.text.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>List Manager</h1>
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        placeholder="Add a new item"
      />
      <button onClick={addItem}>Add Item</button>
      <button onClick={handleSort}>Sort Alphabetically</button>
      <input
        type="text"
        value={filter}
        onChange={handleFilterChange}
        placeholder="Filter items"
      />
      <ul>
        {filteredItems.map((item, index) => (
          <li key={item.id}>
            {editIndex === index ? (
              <>
                <input
                  type="text"
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                />
                <button onClick={saveEdit}>Save</button>
              </>
            ) : (
              <>
                {item.text}
                <button onClick={() => startEditing(index)}>Edit</button>
                <button onClick={() => removeItem(item.id)}>Remove</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListManager;

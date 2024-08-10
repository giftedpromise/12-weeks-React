{
  /* 
  Day 6: Rendering Lists and Keys
    Learning Objectives:
1. Understand how to render lists of items in React.
2. Learn the importance of keys in lists.
3. Practice using .map() to generate elements.
4. Manage dynamic updates such as adding or removing items from a list.
5. Learn how to handle dynamic list updates.
6. Understand best practices for managing lists and keys to avoid common issues.

Topics to Cover:
1. Rendering Lists in React:
Use the .map() method to iterate over arrays and render list items.

2. Importance of Keys:
Keys help React identify which items have changed, are added, or are removed.
They should be unique among sibling elements.

3. Dynamic Lists:
Learn how to add, remove, and update items in a list dynamically.
Handling List Updates:

4. Manage state to handle changes in lists and ensure UI updates correctly.

Concepts to Understand:

Concepts to Cover:
1. Rendering Lists:

.map() Method:
.map() is an array method used to iterate over each item in an array and return a new array of items.
In React, .map() is commonly used to generate a list of JSX elements from an array of data.

const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) => (
   ( <li key={number}>{number}</li>))

2. Using Keys:
Purpose of Keys:
Keys help React identify which items have changed, are added, or are removed, optimizing the rendering process.
Keys should be unique among sibling elements but do not need to be globally unique.

Best Practices:
Use unique and stable identifiers for keys. 
Avoid using array indices if the list can change, as it may cause rendering issues.

const items = ['Apple', 'Banana', 'Cherry'];
return (
<ul>
{items.map((item, index) => (
    <li key={item}>{item}</li>))}
</ul>

);


3.Dynamic List Updates:

Adding Items:
Manage list items using React’s state. Use functions to add items to the list.

Removing Items:
Implement functions to remove items from the list based on their index or unique identifier.

import React, { useState } from 'react';


const ListManager = () => {
const [items, setItems] = useState([]);
const [newItem, setNewItem] = useState("");

  const addItem = () => {
 if (newItem.trim() === "")return;    
 setItems([items..., newItem]);
 setItems("");

 const removeItem = () => {
    setItems(items.filter((_, i) => i !== index));
    }

  }
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
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => removeItem(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
    );
    
    };

export default ListManager;

4. Stable Keys:

Use stable and unique values for key props to avoid unnecessary re-renders.
 Avoid using indexes as keys if the list can change.

 Performance Considerations:
Properly managing keys and list updates improves performance and ensures that 
React updates only the parts of the DOM that have changed.

Avoid Side Effects:
Ensure that list operations (adding/removing items) do not introduce side effects or cause unexpected behavior.

    */
}

import React from "react";

const DaySix = () => {
  return (
    <div>
      <h1></h1>
    </div>
  );
};

export default DaySix;

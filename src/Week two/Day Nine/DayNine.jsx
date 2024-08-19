{
  /*
    
Day 2: Using useState Hook
Overview
The useState hook is one of the fundamental hooks in React, 
allowing you to add state to functional components.
 It returns an array with two elements: the current state value and a function to update that state.
const [state, setState] = useState(initialValue);

Basic Syntax
const [state, setState] = useState(initialValue);
state: The current state value.
setState: The function used to update the state.
initialValue: The initial value of the state when the component mounts.
Usage
Initializing State:

You can initialize the state with any value: a string, number, boolean, array, or object.
Example: const [count, setCount] = useState(0);
Updating State:

Use the setState function to update the state. React will then re-render the component with the updated state.
Example: setCount(count + 1);
Using State in JSX:

You can use the state directly in your JSX.
Example: <p>Current count: {count}</p>
Handling Objects or Arrays in State:

When using objects or arrays in state, make sure to update the entire object or array.
Example:

const [user, setUser] = useState({ name: 'John', age: 25 });
setUser({ ...user, age: 26 }); // Only updating the age

    */
}

import React, { useState } from "react";
const DayNine = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default DayNine;

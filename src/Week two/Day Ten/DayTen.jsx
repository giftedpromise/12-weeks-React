{
  /*
   Day 10: Using useEffect Hook
Overview
The useEffect hook allows you to perform side effects in functional components. 
Side effects can include data fetching, updating the DOM, setting up subscriptions,
 and more. It’s the functional equivalent of lifecycle methods 
like componentDidMount, componentDidUpdate, and componentWillUnmount in class components. 

useEffect(() => {
  // Your side effect logic here

  return () => {
    // Cleanup logic here (optional)
  };
}, [dependencies]);



Effect Callback: The first argument to useEffect is a function where you can perform your side effects.
Cleanup Function: If your effect needs to clean up after itself,
 you can return a cleanup function from the effect.
Dependencies Array: The second argument is an array of dependencies 
that determine when the effect should be re-run. If the array is empty, 
the effect only runs once after the initial render (like componentDidMount). 
If not provided, the effect will run after every render.

Usage
1. Running an Effect Once on Mount:
You can use useEffect with an empty dependencies array ([]) to mimic componentDidMount.
Example:
useEffect(() => {
  console.log('Component mounted');
}, []);

2. Running an Effect on State or Props Change:
By adding dependencies to the array, the effect will re-run whenever those dependencies change.
Example:
useEffect(() => {
  console.log('Count has changed:', count);
}, [count]);

Cleanup on Unmount:

If your effect sets up something that needs cleanup (like a subscription or a timer), return a cleanup function.
Example:
useEffect(() => {
  const timer = setInterval(() => {
    console.log('Timer running');
  }, 1000);

  return () => {
    clearInterval(timer);
    console.log('Timer cleaned up');
  };
}, []);


    */
}

import React from "react";
import DataFetcher from "./DataFetcher";
import UserList from "./UserList";

export const DayTen = () => {
  return (
    <div>
      <DataFetcher />
      <UserList />
    </div>
  );
};

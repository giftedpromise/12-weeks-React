{
  /*
    Day 4: Custom Hooks
What Are Custom Hooks?
In React, a custom hook is a JavaScript function whose name starts with "use" and that can call other hooks.
 Custom hooks allow you to extract and reuse stateful logic between components, making your code more modular, 
 readable, and maintainable.

Custom hooks are a way to encapsulate logic that’s shared between components. 
For example, if multiple components need to fetch data from an API,
 you can create a custom hook to handle the fetching logic instead of duplicating the code in each component.

Why Use Custom Hooks?
1. Reusability: Custom hooks allow you to extract and reuse logic between components.

2. Clean Code: Helps to keep components focused on rendering UI, while logic can be moved to hooks.
Separation of Concerns: Separates complex logic from UI components, improving maintainability.

How to Create a Custom Hook
A custom hook is just a function that can use React hooks like useState, useEffect, or others. 
The function must start with "use" to adhere to React's rules of hooks.

Here's a basic example of a custom hook that fetches data:
    import { useState, useEffect } from 'react';

function useFetchData(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, [url]);

  return { data, loading, error };
}

export default useFetchData;

This useFetchData hook can now be used in any component that needs to fetch data.
Using the Custom Hook


import React from 'react';
import useFetchData from './useFetchData';

function UsersList() {
  const { data: users, loading, error } = useFetchData('https://jsonplaceholder.typicode.com/users');

  if (loading) return <p>Loading users...</p>;
  if (error) return <p>Error loading users: {error.message}</p>;

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>
          {user.name} - {user.email}
        </li>
      ))}
    </ul>
  );
}

export default UsersList;

    */
}

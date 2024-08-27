{
  /*
    Practice Exercise
Objective: Create a simple React component that fetches and displays a 
list of users from an API when the component mounts. 
Implement a cleanup function to handle the component unmounting.
    */
}

import React, { useState, useEffect } from "react";

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });

    // Optional cleanup function
    return () => {
      console.log("UserList component is unmounting");
    };
  }, []); // Empty dependency array to run only once

  if (loading) {
    return <p>Loading users...</p>;
  }

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
            <div>{user.username}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;

{
  /* 
    Practice Exercise
Objective: Create a simple React component that simulates a basic form with an 
input field where users can enter their name. 
The component should display the entered name below the input field in real-time as the user types.
    
    */
}

import React, { useState } from "react";

const Practice = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <form>
        <label htmlFor="">
          Enter your name:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <label htmlFor="">
          Enter your age:
          <input type="number" onChange={handleAgeChange} />
        </label>
      </form>
      <p>
        Your name is: {name}, and you are {age} years old.
      </p>
    </div>
  );
};

export default Practice;

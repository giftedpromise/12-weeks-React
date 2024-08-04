{
  /* 
    Practice Exercise: Event Handling in React
Objective: Create a React component that handles user interactions including
 button clicks, form submissions, and input changes.
    
    */
}

import React, { useState } from "react";

const HandlingEvents = () => {
  const [clicked, setClicked] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [submittedValue, setSubmittedValue] = useState("");

  const buttonClicked = () => {
    setClicked("Button Clicked!");
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedValue(inputValue);
  };

  return (
    <div>
      <h1>Event Handling in React</h1>
      <button onClick={buttonClicked}>Click Me</button>
      {clicked && <p>{clicked}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Type something"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button type="submit">Submit</button>
        {submittedValue && <p>You submitted:{submittedValue}</p>}
      </form>
    </div>
  );
};

export default HandlingEvents;

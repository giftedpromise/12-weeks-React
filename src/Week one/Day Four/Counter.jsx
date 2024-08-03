{
  /*
    
Practice Exercises
1. Basic Counter Component:

Create a simple counter component with useState that increases and decreases a count when buttons are clicked.
    */
}

import React, { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount(count - 1);
  };

  const buttonStyle = {
    padding: "10px 20px",
    fontSize: "16px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    margin: "5px",
    color: "#fff",
  };

  const increaseButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#4CAF50", // Green
  };

  const decreaseButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#f44336", // Red
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button style={increaseButtonStyle} onClick={increase}>
        Increase Count
      </button>
      <button style={decreaseButtonStyle} onClick={decrease}>
        Decrease Count
      </button>
    </div>
  );
};

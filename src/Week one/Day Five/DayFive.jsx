import React from "react";
import HandlingEvents from "./HandlingEvents";

{
  /*
  Topic covered: Day 5: Handling Events
    Handling events in React is a crucial skill for creating interactive user interfaces.

    Understanding Event Handling in React
Event Handlers:

In React, event handlers are functions that respond to user actions like clicks, 
form submissions, or keyboard inputs.
We may use the following mouse and keyboard events. onMouseMove, onMouseEnter, onMouseLeave, onMouseOut,
 onClick, onKeyDown, onKeyPress, onKeyUp, onCopy, onCut, onDrag, onChange,onBlur,onInput, onSubmit
Event handlers are attached to HTML elements using JSX attributes like onClick, onChange, onSubmit, etc.
Handling events in React is very similar to handling elements on DOM elements 
using pure JavaScript. Some of the syntax difference between handling event in React and pure JavaScript:

React events are named using camelCase, rather than lowercase.
With JSX you pass a function as the event handler, rather than a string.



5. Preventing Default Behavior:

To prevent the default behavior of an event (like preventing a form from submitting), 
use event.preventDefault():

const handleSubmit = (event) => {
  event.preventDefault();
  // handle form submission
};

6.Passing Arguments to Handlers:

You can pass arguments to event handlers using an arrow function:
<button onClick={() => handleClick('Hello')}>Click Me</button>

    */
}

const DayFive = () => {
  return (
    <div>
      <h2></h2>
      <HandlingEvents />
    </div>
  );
};

export default DayFive;

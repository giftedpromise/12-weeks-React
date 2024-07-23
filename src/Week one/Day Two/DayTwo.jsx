import React from "react";

const DayTwo = () => {
  const name = "John";
  const isLoggedIn = true;
  const numbers = [1, 2, 3, 4, 5];
  const listItems = numbers.map((number) => (
    <li key={number.toString()}>{number}</li>
  ));
  return (
    <div>
      <h1>Day 2: Understanding JSX</h1>
      {/*
Learning Objectives:
Understand what JSX is and its importance in React.
Learn the syntax and rules of JSX.
Practice using JSX to create and render elements.
Topics to Cover:
What is JSX?

Definition and purpose of JSX.
How JSX is different from HTML.
Basic Syntax and Rules:

Embedding expressions in JSX.
Specifying attributes with JSX.
Using JavaScript expressions in JSX.
JSX is an expression too.
JSX Gotchas:

Differences between JSX and HTML.
Handling class and style attributes.
Self-closing tags.
Rendering JSX:

Using JSX in React components.
Rendering lists and conditional content.
      
1. What is JSX?

Definition:
JSX stands for JavaScript XML. It allows you to write HTML elements in JavaScript and place them in the DOM.
Purpose:
JSX makes it easier to write and add HTML in React. While it looks similar to HTML, JSX is transformed into JavaScript objects by a preprocessor (like Babel).
Difference from HTML:
JSX includes JavaScript expressions within HTML-like syntax.
Basic Syntax and Rules:

1. In React, you cannot declare variables or functions directly inside a return statement within a functional component.
 The return statement in a functional component is specifically for returning JSX (or null) that represents the UI you want to render.

Embedding Expressions:
You can embed any JavaScript expression in JSX by wrapping it in curly braces {}.
      */}
      <h1>Hello, {name}!</h1>;
      {/*
       Specifying Attributes:
JSX attributes are written in camelCase instead of lowercase.
      */}
      const element = <a href="https://www.example.com">Link</a>; const
      elementWithClass = <div className="container"></div>;
      {/*
      JavaScript Expressions:
You can use JavaScript expressions inside JSX.
      */}
      const element1 = <h1>{1 + 2 + 3}</h1>;
      {/* 
      3. JSX Gotchas:

Differences from HTML:
class becomes className in JSX.
Inline styles are written as objects.
      
      */}
      const element2 ={" "}
      <div style={{ color: "blue", fontSize: "14px" }}>Styled Text</div>;
      {/*
      
      Self-Closing Tags:
All tags must be closed. Self-closing tags like <img /> and <br /> need a closing slash.
      */}
      const element3 = <img src="logo.png" alt="Logo" />;
      {/*
      Rendering JSX:

Using JSX in React Components:
You can use JSX to define what a component renders.
function Greeting() {
  return <h1>Hello, World!</h1>;
}
Rendering Lists:
Use JavaScript’s map() to transform lists of data into JSX elements.
      */}
      <ul>{listItems}</ul>
      {/*
      Conditional Rendering:
You can use conditional statements inside JSX.
      */}
      <div>
        {isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please sign up.</h1>}
      </div>
    </div>
  );
};

export default DayTwo;

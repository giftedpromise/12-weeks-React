import React from "react";
import Functional from "./Functional";
import Class from "./Class";

const DayThree = () => {
  return (
    <div>
      {/*
        Day 3: React Components (Functional and Class Components)
Learning Objectives:

Understand the differences between Functional and Class Components.
Learn how to create and use both types of components in React.
Practice creating both Functional and Class components with a simple exercise.
1. Understanding Components
Functional Components
Definition: Functional components are JavaScript functions that return JSX. 
They are simpler and easier to write and understand. 
They don't have their own state or lifecycle methods (prior to React 16.8).

Class Components
Definition: Class components are ES6 classes that extend from React.Component.
 They can hold their own state and have access to lifecycle methods. 
They are more feature-rich compared to functional components.
        */}
      <Functional name="Promise" />
      <Class name="Ishaku" />
    </div>
  );
};

export default DayThree;

{
  /* 
Day 13
Topic Covered: React Hooks


React Hooks are functions that let you use state and other React features in functional components. 
Introduced in React 16.8, Hooks allow you to reuse stateful logic without changing your component hierarchy.
 Here’s an overview of some of the most commonly used Hooks:

 1. useState
Manages state in a functional component.

Example
   import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
 

2. useEffect
Handles side effects in your component, such as data fetching, subscriptions, or manually changing the DOM.
Runs after every render by default.
Example:
import React, { useState, useEffect } from 'react';

function DataFetcher() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => setData(data));
  }, []); // Empty array ensures this runs only once when the component mounts

  return (
    <div>
      <p>Data: {JSON.stringify(data)}</p>
    </div>
  );
}

3. useContext
Accesses the value of a context within your component without needing to wrap it in a context consumer.
Example:
import React, { useContext } from 'react';
const ThemeContext = React.createContext('light');

function ThemedButton() {
  const theme = useContext(ThemeContext);
  return <button style={{ background: theme }}>Click me</button>;
}


4. useReducer
An alternative to useState for more complex state logic, similar to Redux’s reducer function.
Example:
import React, { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </div>
  );
}


5. useRef
Creates a mutable object that persists across renders, commonly used for accessing DOM elements directly.
Example:
import React, { useRef } from 'react';

function TextInputWithFocusButton() {
  const inputEl = useRef(null);

  const onButtonClick = () => {
    inputEl.current.focus();
  };

  return (
    <div>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </div>
  );
}


6. useMemo
Memoizes a computed value to avoid re-computation on every render, useful for optimizing performance.
Example:

import React, { useState, useMemo } from 'react';

function ExpensiveCalculation({ num }) {
  const result = useMemo(() => {
    return num * 2; // Expensive operation
  }, [num]);

  return <div>Result: {result}</div>;
}
7. useCallback
Memoizes a callback function, useful when passing functions to child components to prevent unnecessary re-renders.
Example:

import React, { useState, useCallback } from 'react';

function ParentComponent() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(c => c + 1);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <ChildComponent onClick={increment} />
    </div>
  );
}

function ChildComponent({ onClick }) {
  return <button onClick={onClick}>Increment</button>;
}
8. useLayoutEffect
Similar to useEffect, but fires synchronously after all DOM mutations. It's used for measurements or mutations that need to be done before the browser repaints.
Example:

import React, { useLayoutEffect, useRef } from 'react';

function LayoutComponent() {
  const divRef = useRef();

  useLayoutEffect(() => {
    console.log(divRef.current.getBoundingClientRect());
  });

  return <div ref={divRef}>Measure this div</div>;
}

9. useImperativeHandle
Customizes the instance value that is exposed when using ref with a component.
Example:

import React, { useRef, useImperativeHandle, forwardRef } from 'react';

function CustomInput(props, ref) {
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    },
  }));

  return <input ref={inputRef} {...props} />;
}

CustomInput = forwardRef(CustomInput);

function Parent() {
  const inputRef = useRef();

  return (
    <div>
      <CustomInput ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>
        Focus Input
      </button>
    </div>
  );
}
10. useDebugValue
Used to display a label for custom hooks in React DevTools.
Example:

import React, { useState, useDebugValue } from 'react';

function useCustomHook() {
  const [value, setValue] = useState('Hello');
  useDebugValue(value ? 'Set' : 'Unset');
  return [value, setValue];
}
Summary
Hooks make it easier to organize and manage stateful logic in your React applications, allowing you to write cleaner, more efficient code. They also enable functional components to be as powerful as class components, with easier-to-understand and more reusable logic.
    */
}

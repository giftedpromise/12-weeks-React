import React from "react";
import Greeting from "./Greeting";
import Book from "./Book";

const DayFour = () => {
  return (
    <div>
      {/*
Day 4: Props and State in React
Learning Objectives:

Understand the concept of Props and how they are used in React components.
Learn how to manage and use State in React components.
Practice using Props and State through hands-on exercises.

Key Concepts About Props
1.What Are Props?

Props (short for properties) are a mechanism for passing data and event handlers from a
 parent component to child components in React. 
They are immutable, meaning the child component cannot modify them.

2. How Props Work
Props are passed from a parent component to a child component via attributes. 
These attributes are accessed in the child component through the props object or destructuring.

3.Default Props
You can set default values for props using defaultProps. T
his ensures that a component has fallback values if certain props are not provided.

import React from 'react';

const Button = ({ label }) => {
  return <button>{label}</button>;
};

Button.defaultProps = {
  label: 'Click Me',
};

export default Button;

4. Prop Types
You can use prop-types to validate the types of props passed to a component.
 This helps in catching bugs by ensuring that the component receives the correct 
 type and structure of data.

 import React from 'react';
import PropTypes from 'prop-types';

const UserProfile = ({ name, age }) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>{age} years old</p>
    </div>
  );
};

UserProfile.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
};

export default UserProfile;

5. Children Prop
The children prop is a special prop used to pass elements or components between the 
opening and closing tags of a component. This is often used for component composition.
import React from 'react';

const Container = ({ children }) => {
  return <div className="container">{children}</div>;
};

export default Container;

import React from 'react';
import Container from './Container';

const App = () => {
  return (
    <Container>
      <h1>Hello World</h1>
      <p>This is a child element.</p>
    </Container>
  );
};

export default App;

6.Props and Performance
Props are read-only, and passing large amounts of data or functions as props can impact performance.
 Consider using useMemo or React.memo to optimize performance if necessary.

import React from 'react';

const ChildComponent = React.memo(({ data }) => {
  return <div>{data}</div>;
});

export default ChildComponent;

7. Passing Functions as Props
You can pass functions as props to handle events or callbacks from child components.
Example:
import React from 'react';

const Button = ({ onClick }) => {
  return <button onClick={onClick}>Click Me</button>;
};

const App = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return <Button onClick={handleClick} />;
};

export default App;

8.Destructuring props
Destructuring props in React is a concise way to extract multiple properties from the props 
object directly in the function signature or within the function body. 
This approach improves readability and reduces code verbosity.

Destructuring Props in Functional Components
1. Destructuring in Function Parameters
Instead of accessing props with props.propertyName, you can destructure them directly in the function parameters.

Example:

Without Destructuring:
import React from 'react';

const UserProfile = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.age} years old</p>
    </div>
  );
};

export default UserProfile;

With Destructuring:
import React from 'react';

const UserProfile = ({ name, age }) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>{age} years old</p>
    </div>
  );
};

export default UserProfile;

2. Destructuring Inside the Function Body
You can also destructure props inside the function body,
 which can be useful if you need to use props in multiple places.

Example:

Without Destructuring Inside the Function Body:

import React from 'react';

const UserProfile = (props) => {
  const name = props.name;
  const age = props.age;

  return (
    <div>
      <h1>{name}</h1>
      <p>{age} years old</p>
    </div>
  );
};

export default UserProfile;

With Destructuring Inside the Function Body:
import React from 'react';

const UserProfile = (props) => {
  const { name, age } = props;

  return (
    <div>
      <h1>{name}</h1>
      <p>{age} years old</p>
    </div>
  );
};

export default UserProfile;

How JSX Handles Values

Without Curly Braces (String Literal):
When you pass a value as a prop without curly braces, React treats it as a string. 
This means that even if you intend to pass a number, it will be interpreted as a string.
*/}

      <h1>Hello</h1>
      <Greeting message="Good morning" />
      <Greeting message="Good Afternoon" />
      <Book title="To Kill a Mockingbird" author="Harper Lee" year={1960} />
      <Book title="1984" author="George Orwell" year={1949} />
    </div>
  );
};

export default DayFour;

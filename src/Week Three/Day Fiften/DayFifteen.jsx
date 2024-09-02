{
  /*
    Day 15: CSS in React (Inline Styles, CSS Modules)
1. Learn How to Use Inline Styles in React
Inline styles in React are written as objects in JavaScript, where the keys are camelCased versions of the CSS properties, and the values are strings.

Example:
import React from 'react';

const InlineStyleComponent = () => {
  const divStyle = {
    backgroundColor: 'lightblue',
    padding: '20px',
    borderRadius: '5px',
    textAlign: 'center'
  };

  return (
    <div style={divStyle}>
      <h2 style={{ color: 'darkblue', fontSize: '24px' }}>Hello, Inline Styles!</h2>
    </div>
  );
};

export default InlineStyleComponent;

Key Points:

Inline styles are useful for dynamic styles that depend on state or props.
They are applied directly to the component, ensuring immediate and specific styling.
Inline styles can override other CSS styles due to their specificity.
2. Explore the Advantages of CSS Modules for Scoped Styling
CSS Modules allow you to write CSS that is scoped locally to the component, avoiding global namespace clashes. CSS Modules are typically used with React to apply styles in a modular and reusable manner.

Steps to Use CSS Modules:

1. Create a CSS Module:
Name your CSS file with the .module.css extension, e.g., Button.module.css.

 Button.module.css 
.button {
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.button:hover {
  background-color: #0056b3;
}


    */
}

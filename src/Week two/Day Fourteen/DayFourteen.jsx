{
  /*
   Day 5: Context API
Understanding the Context API
The Context API is a React feature that allows you to share state or data across multiple components
 without having to pass props down through each level of the component tree. 
 This is particularly useful for managing global data that needs to be accessed by various 
 parts of your application, such as user authentication status, themes, or language preferences. 
    

 Key Concepts
1. Context Creation:
React.createContext(): This function is used to create a new context object.
 The context object comes with two components: Provider and Consumer.

 const MyContext = React.createContext();

 2. Provider:

Provider Component: The Provider component makes the context value available to any component in its subtree. 
You use it by wrapping your component tree and passing the value you want to share as a prop to the Provider.

<MyContext.Provider value={some value}>
   component tree 
</MyContext.Provider>


3. Consumer:
Consumer Component: The Consumer component allows any nested component to access the context value.
 It uses the render props pattern.

 <MyContext.Consumer>
  {value => render something based on the context value }
</MyContext.Consumer>

4. useContext Hook:

useContext Hook: This hook simplifies context consumption by allowing you to access the context value 
directly within a functional component without using the Consumer component.
const value = useContext(MyContext);


Why Use Context API?
1. Avoid Prop Drilling: Context API eliminates the need to pass props manually down every level of your component tree,
 making your code cleaner and easier to maintain.
2. Global State Management: Ideal for managing global state, such as user authentication or themes,
 that multiple components need to access.
3. Better Separation of Concerns: Keeps your components focused on UI rendering by separating 
state management into context, making your code more modular and maintainable.


How to Use the Context API
1. Creating Context:
Create a context object using React.createContext(). 
This object will hold the data you want to share across components.
const ThemeContext = React.createContext('light'); // 'light' is the default value

2. Providing Context:
Wrap your component tree with the Provider component, and pass the context value as a prop to it.
function App() {
  const theme = 'dark';

  return (
    <ThemeContext.Provider value={theme}>
      <Header />
      <Content />
    </ThemeContext.Provider>
  );
}

3.Consuming Context:
Use the useContext hook or Consumer component to access the context value
 in any component within the Provider's subtree.

 function Header() {
  const theme = React.useContext(ThemeContext);

  return <h1>Current Theme: {theme}</h1>;
}

    */
}

import React from "react";
import Context from "./Context";

const DayFourteen = () => {
  return (
    <div>
      <Context />
    </div>
  );
};

export default DayFourteen;

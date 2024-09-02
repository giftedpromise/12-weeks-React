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

    */
}

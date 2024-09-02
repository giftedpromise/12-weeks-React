import React, { useState, useContext } from "react";

// Create a Theme Context
const ThemeContext = React.createContext("light");

function Context() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={theme}>
      <button onClick={toggleTheme}>
        Toggle to {theme === "light" ? "dark" : "light"} mode
      </button>
      <ThemedComponent />
    </ThemeContext.Provider>
  );
}

function ThemedComponent() {
  const theme = useContext(ThemeContext);

  const styles = {
    backgroundColor: theme === "light" ? "#fff" : "#333",
    color: theme === "light" ? "#000" : "#fff",
    padding: "20px",
    textAlign: "center",
  };

  return <div style={styles}>The current theme is {theme}</div>;
}

export default Context;

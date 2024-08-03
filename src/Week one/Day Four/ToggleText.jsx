{
  /* 
    Toggle Visibility:

Create a component with a button that toggles the visibility of some text.
    */
}

import React, { useState } from "react";

const ToggleText = () => {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "show" : "hide"} Text
      </button>
      {isVisible && <p>This is some toggled text.</p>}
    </div>
  );
};

export default ToggleText;

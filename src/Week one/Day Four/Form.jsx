{
  /*
    Form with State:

Create a form with state to manage user input. Display the form values below the input fields.
    */
}

import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div>
      <form action="">
        <label htmlFor="">
          Name:{" "}
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>{" "}
        <br />
        <label htmlFor="">
          Email:{" "}
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
      </form>
      <h2>Form Data:</h2>
      <p>name: {name}</p>
      <p>email: {email}</p>
    </div>
  );
};

export default Form;

{
  /*
    Day 7: Forms and Controlled Components
Key Concepts
1. Forms in React:

Forms are crucial for capturing user inputs and are commonly used in web applications.
React handles forms by using controlled components, where form values are managed by React’s state.

2. Controlled Components:

In a controlled component, form elements such as <input>, <textarea>, and <select> get their values from React state.
The state is updated via event handlers, making it easier to manage and validate form data.
3. Handling Form Submission:

Forms are usually submitted using the onSubmit event of the <form> element.
To prevent the form from reloading the page, use event.preventDefault() in the submit handler.
4. Event Handling:

Use onChange for input fields to handle user input and update the state.
Use onSubmit to handle the form submission event and process the data.
5. Validation:

Validation ensures that user inputs meet the required criteria before processing or sending data.
Basic validation can be done directly in the form handler, but more complex scenarios may benefit from validation libraries.
Detailed Explanation
1. Controlled Components Example:

The form’s input fields are controlled by React state. When the user types in an input field, the value is stored in the state.
This makes it easy to manipulate and validate form data before submission.
2. Form Submission:

The onSubmit event handler prevents the default browser behavior of refreshing the page.
The form data is processed in this handler, and the state is usually updated to reflect the submission.
3. Validation:

Simple validation can be handled inline, where you check if fields are empty or follow certain patterns.
For more robust validation, you can use libraries like Formik or react-hook-form.
    
Summary
Controlled Components: Manage form state using React’s state, making it easy to handle and validate form data.
Form Handling: Prevent default actions, manage form submissions, and update the state accordingly.
Validation: Ensure that user inputs meet the required criteria before processing.
    */
}

import React, { useState } from "react";

const DaySeven = () => {
  // State to store form input values
  const [formData, setFormData] = useState({ name: "", email: "", age: "" });
  // State to store submitted data
  const [submittedData, setSubmittedData] = useState(null);
  // State to store validation errors
  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Validate form inputs
  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";
    if (formData.age && isNaN(formData.age))
      newErrors.age = "Age must be a number";
    else if (formData.age < 0) newErrors.age = "Age must be a positive number";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    if (!validate()) return; // Validate form data
    setSubmittedData(formData); // Set submitted data
    setFormData({ name: "", email: "", age: "" }); // Clear form
  };

  return (
    <div>
      <h1>User Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
            {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
          </label>
        </div>
        <div>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
          </label>
        </div>
        <div>
          <label>
            Age:
            <input
              type="text"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
            />
            {errors.age && <p style={{ color: "red" }}>{errors.age}</p>}
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
      {submittedData && (
        <div>
          <h2>Submitted Data:</h2>
          <p>Name: {submittedData.name}</p>
          <p>Email: {submittedData.email}</p>
          <p>Age: {submittedData.age}</p>
        </div>
      )}
    </div>
  );
};

export default DaySeven;

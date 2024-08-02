import React from "react";

const Book = ({ title, author, year }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{author}</p>
      <p>{year}</p>
    </div>
  );
};

export default Book;

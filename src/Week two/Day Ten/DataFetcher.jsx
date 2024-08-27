import React, { useState, useEffect } from "react";

function DataFetcher() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => response.json())
      .then((json) => setData(json));

    // Optionally, return a cleanup function
    return () => {
      console.log("Cleanup on unmount");
    };
  }, []); // Empty array means this effect only runs once

  return (
    <div>
      {data ? (
        <div>
          <h1>{data.title}</h1>
          <p>{data.body}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default DataFetcher;

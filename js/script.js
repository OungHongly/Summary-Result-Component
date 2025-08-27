"use strict";

// Fetch JSON file
fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    // Select elements
  })
  .catch((error) => console.log("Error loading JSON:"));

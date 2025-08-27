"use strict";

// Fetch JSON file
fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    // Select elements
    const groupSubject = document.querySelector(".group-subject");
    const result = document.getElementById("avg--score");

    let total = 0;

    for (const { category, score, icon } of data) {
      // console.log(category, score, icon);
      const categorylowerCase = category.toLowerCase();
      // console.log(categorylowerCase);
      groupSubject.innerHTML += `
        <div class="test-subject ${categorylowerCase}">
              <div class="subject">
                <img src="${icon}"
                  alt="icon-reaction" class="icon-subject">
                <p class="${categorylowerCase}-title">${category}</p>
              </div>
              <p class="score"><span id="${categorylowerCase}--score">${score}</span> / 100</p>
          </div>
      `;
      total += score;
    }
    let average = total / 4;
    result.textContent = Math.trunc(average);
  })
  .catch((error) => console.log("Error loading JSON:", error));

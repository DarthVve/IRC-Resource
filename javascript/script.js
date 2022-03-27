"use strict";

// Selecting elements
// Rating section

const windowOne = document.querySelector(".rating-wrapper");
const windowTwo = document.querySelector(".thank-you-wrapper");

const optionsEl = document.querySelectorAll(".options");
const submitEl = document.querySelector(".submit");
const valueEl = document.getElementById("value");

let value = 0;

for (let i = 0; i < optionsEl.length; i++) {
  optionsEl[i].addEventListener("click", function () {
    if (value <= i) {
      value = 1;
      value = i + value;
    }

    optionsEl[i].classList.add("bg");
  });
}

submitEl.addEventListener("click", function () {
  if (value >= 1) {
    windowOne.classList.add("hidden");
    windowTwo.classList.remove("hidden");
  }

  valueEl.textContent = value;
  // valueEl.textContent = value;
});

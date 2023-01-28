"use strict";

// s-cards buttons toggle

const forYouBtn = document.querySelector(".for-u-btn");
const forCompaniesBtn = document.querySelector(".for-companies-btn");

function forYouBtnToggle() {
  forYouBtn.classList.add("btn-active");
  forYouBtn.classList.remove("btn-disabled");
  forCompaniesBtn.classList.add("btn-disabled");
}

function forCompaniesBtnToggle() {
  forCompaniesBtn.classList.add("btn-active");
  forCompaniesBtn.classList.remove("btn-disabled");
  forYouBtn.classList.add("btn-disabled");
}

forYouBtn.addEventListener("click", forYouBtnToggle);
forCompaniesBtn.addEventListener("click", forCompaniesBtnToggle);

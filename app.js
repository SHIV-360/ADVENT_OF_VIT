const sendBtn = document.querySelector(".btn");
const errorMsg = document.querySelector(".error-msg");
const errorIcon = document.querySelector(".error");
const inputEl = document.querySelector(".input-field");
const emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


sendBtn.addEventListener("click", function () {
    if (inputEl.value === "FLAG") {
      errorMsg.style.display = "inline";
      errorMsg.style.color = "green";
      errorMsg.style.fontWeight = "bold"; // Make text bold
      errorIcon.style.display = "none";
      errorMsg.textContent = "YEAH... This is it move one two stage TWO";
    } else if (inputEl.value.length === 0) {
      errorMsg.style.display = "inline";
      errorIcon.style.display = "inline";
      errorMsg.style.color = "red";
      errorMsg.style.fontWeight = "bold"; // Make text bold
      errorMsg.textContent = "OOPS It seems no input was provided";
    } else {
      errorMsg.style.display = "inline";
      errorIcon.style.display = "inline";
      errorMsg.style.color = "red";
      errorMsg.style.fontWeight = "bold"; // Make text bold
      errorMsg.textContent = "OOPS It seems the given string is not the FLAG";
    }
  });

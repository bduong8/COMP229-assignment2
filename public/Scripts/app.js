/* 
Student Name: Brian Duong
Student ID: 300741880
Date: October 31st, 2022
IIFE -- Immediately Invoked Function Expression
*/
(function () {
  function Start() {
    console.log("App Started...");
    let deletebuttons = document.querySelectorAll(".btn-danger");
    for (button of deletebuttons) {
      button.addEventListener("click", (event) => {
        if (!confirm("Are you sure")) {
          event.preventDefault();
          window.location.assign("/contact-list");
        }
      });
    }
  }
  window.addEventListener("load", Start);
})();

/*
const h2 = document.createElement("h2");
h2.textContent = "This content added by JavaScript";
document.querySelector("body").appendChild(h2);
*/
const input = document.getElementsByClassName("linkToSite")[0];
const changeFont = document.getElementsByClassName("bio");

input.addEventListener('click', function(event) {
  input.style.color = "grey";
});

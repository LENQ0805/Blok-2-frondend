// JavaScript Document
var dropdownknop = document.querySelector(".dropdownknop");

var dropdownzelf = document.querySelector(".dropdownzelf");

function dropdowntoggle() {
    dropdownzelf.classList.toggle("hidden");
    dropdownknop.classList.toggle("dropdownknopactief");
}

dropdownknop.addEventListener("click", dropdowntoggle);

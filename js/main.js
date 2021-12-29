let firstDot = document.querySelector(".dot:nth-child(1)");
let secondDot = document.querySelector(".dot:nth-child(2)");
let thirdDot = document.querySelector(".dot:nth-child(3)");
let container = document.getElementById("container");
const hamburgerMenu = document.getElementById("burger-menu");
const hamburgerMenu2 = document.getElementById("burger-menu-2");

let counter = 0;

/* Codice per hamburger-menu */
hamburgerMenu.addEventListener("click", () => {

    document.getElementById("lateral-menu").style.display = "flex";
    hamburgerMenu.style.display = "none";
    hamburgerMenu2.style.display = "block";
})

hamburgerMenu2.addEventListener("click", () => {

    document.getElementById("lateral-menu").style.display = "none";
    hamburgerMenu2.style.display = "none";
    hamburgerMenu.style.display = "block";
})
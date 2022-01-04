const firstDot = document.querySelector(".dot:nth-child(1)");
const secondDot = document.querySelector(".dot:nth-child(2)");
const thirdDot = document.querySelector(".dot:nth-child(3)");
const container = document.getElementById("container");
const hamburgerMenu = document.getElementById("burger-menu");
const hamburgerMenu2 = document.getElementById("burger-menu-2");
const lateralMenu = document.getElementById("lateral-menu");
const mainTitle = document.getElementById("main-title");

/* Codice per hamburger-menu */
hamburgerMenu.addEventListener("click", () => {

    lateralMenu.style.display = "flex";
    hamburgerMenu.style.display = "none";
    hamburgerMenu2.style.display = "block";
    mainTitle.style.display = "none";
})

hamburgerMenu2.addEventListener("click", () => {

    lateralMenu.style.display = "none";
    hamburgerMenu2.style.display = "none";
    hamburgerMenu.style.display = "block";
    mainTitle.style.display = "block";
})

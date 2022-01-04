const dotOne = document.getElementsByClassName("dot");
const dotTwo = document.querySelectorAll(".dot:nth-child(2)");
const dotThree =  document.querySelectorAll(".dot:nth-child(3)");

const container2 = document.getElementById("#book-button");
const a = document.getElementById("book-button");

function dotClick()
{
    var element = 2;
    container.style.background = "red";
    if(element===1)
    {
        container.style.background = "none";
        a.style.background = "red";
    }
    if(element===2)
    {
        container.style.background = "red";
    }
}

dotOne[0].addEventListener("click", dotClick);

dotOne[1].addEventListener("click", dotClick);

dotOne[2].addEventListener("click", dotClick);
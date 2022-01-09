const dotOne = document.getElementsByClassName("dot");
const dotTwo = document.querySelectorAll(".dot:nth-child(2)");
const dotThree =  document.querySelectorAll(".dot:nth-child(3)");

const container2 = document.getElementById("#book-button");
const a = document.getElementById("book-button");



function changeBackgroundImage(){
    if(this === dotOne[0].matches)
    {
        container.style.background = "red";
        container.style.backgroundSize = "cover";
    }
    console.log(this);
}


dotOne[0].addEventListener("click", () =>{
    container.style.background = "linear-gradient(180deg, rgba(9, 69, 95, 0) 0%, #09455F 140%), url(../media/pexels-photo-1031200.jpeg)";
    container.style.backgroundSize = "cover";
});

dotOne[1].addEventListener("click", () =>{
    container.style.background = "linear-gradient(180deg, rgba(9, 69, 95, 0) 0%, #09455F 140%), url(../media/image_8.png)";
    container.style.backgroundSize = "cover";
});

dotOne[2].addEventListener("click", () =>{
    container.style.background = "linear-gradient(180deg, rgba(9, 69, 95, 0) 0%, #09455F 140%), url(../media/image9.jpg)";
    container.style.backgroundSize = "cover";
});


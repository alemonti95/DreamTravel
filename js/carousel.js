const dotOne = document.getElementsByClassName("dot");
const dotTwo = document.querySelectorAll(".dot:nth-child(2)");
const dotThree =  document.querySelectorAll(".dot:nth-child(3)");

const container2 = document.getElementById("#book-button");
const a = document.getElementById("book-button");



function changeBackgroundImage(){
    if(this === dotOne[0].matches)
    {
        container.style.background = "red";
        
    }
    console.log(this);
}


dotOne[0].addEventListener("click", () =>{
    container.style.background =  "linear-gradient(180deg, rgba(9, 69, 95, 0) 0%, #09455F 140%), url(../media/pexels-photo-1031200.jpeg) no-repeat center center fixed";
    container.style.backgroundSize = "cover";
    container.style.backgroundAttachment = "fixed";
});


dotOne[1].addEventListener("click", () =>{
    container.style.background =  "linear-gradient(180deg, rgba(9, 69, 95, 0) 0%, #09455F 140%), url(media/image_8.png) no-repeat center center fixed";
    container.style.backgroundSize = "cover";
    container.style.backgroundAttachment = "fixed";
});

dotOne[2].addEventListener("click", () =>{
    container.style.background =  "linear-gradient(180deg, rgba(9, 69, 95, 0) 0%, #09455F 140%), url(media/image9.jpg) no-repeat center center fixed";
    container.style.backgroundSize = "cover";
    container.style.backgroundAttachment = "fixed";
});


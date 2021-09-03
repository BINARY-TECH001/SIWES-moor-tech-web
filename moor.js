let container = document.querySelector(".second");

let imageArray = ["images/annie.jpg", "images/bg.jpg", "images/web2.jpeg"];
let pointer = 0;

function changeImage(url){
    container.style.backgroundImage = `url("${url}")`;
}

setInterval(
    () =>{
        if (pointer == imageArray.length) pointer  = 0;
        changeImage(imageArray[pointer]);
        pointer++;
    },1000
);
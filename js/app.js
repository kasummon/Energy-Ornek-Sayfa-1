let photoInner = document.getElementById("photo-inner");
let images = document.querySelectorAll(".photo-holder .img-container");
let val = 0;
let oldVal =0;
let leftArrowButton = document.getElementById("left-arrow-bt");
let rightArrowButton = document.getElementById("right-arrow-bt");

leftArrowButton.addEventListener("click", () => decrement());
rightArrowButton.addEventListener("click", () => increment());

photoInner.style.width = `${document.querySelectorAll(".photo-holder img").length*100}%`;

console.log(leftArrowButton);

for(let i = 0; i<images.length; i++){
    images[i].style.width = `${100/images.length}%`;
}
document.getElementsByClassName("nav-box")[0].addEventListener("click", () => {val = 0;photoInner.style.transform = `translateX(-${100/images.length*val}%)`;scaleDown();document.getElementsByClassName("nav-box")[0].style.backgroundColor = "whitesmoke"});

for(let i = 1; i<images.length; i++){    
    let myNode = document.getElementsByClassName("nav-box")[0].cloneNode(true);
    document.getElementById("landing-navigator").appendChild(myNode);
    document.getElementsByClassName("nav-box")[i].addEventListener("click", () => {val = i;photoInner.style.transform = `translateX(-${100/images.length*val}%)`;scaleDown();document.getElementsByClassName("nav-box")[i].style.backgroundColor = "whitesmoke"});
}

/* Functions */

scaleDown();
looper(); 

function decrement(){
    oldVal = val;

    if(val==0){
        val=images.length-1;
    }

    else {
        val--;
    }
    photoInner.style.transform = `translateX(-${100/images.length*val}%)`;
    scaleDown();
}

function increment(){
    oldVal = val;
    val++;
    val=val % images.length;
    photoInner.style.transform = `translateX(-${100/images.length*val}%)`;
    scaleDown();
};

function scaleDown(){
    console.log("old val is",oldVal,"new val is", val);
    document.getElementsByClassName("slider-img")[oldVal].style.transitionDuration = "50ms";
    document.getElementsByClassName("slider-img")[oldVal].style.transform = "scale(1.2)";
    document.getElementsByClassName("slider-img")[oldVal].style.transition = "ease-in-out 8000ms";
    document.getElementsByClassName("slider-img")[val].style.transform = "scale(1)";
}

function looper (){
    setTimeout(() => {increment(); looper();},10000);
}
var random1 = Math.floor(Math.random() * 6) + 1;
var leftDicePos = "dice" + random1 + ".png";
var pathOfLeft = "images/" + leftDicePos;
document.querySelectorAll("img")[0].setAttribute("src", pathOfLeft);

var random2 = Math.floor(Math.random() * 6) + 1;
var rightDicePos = "dice" + random2 + ".png";
var pathOfRight = "images/" + rightDicePos;
document.querySelectorAll("img")[1].setAttribute("src", pathOfRight);

if(random1>random2){
    document.querySelector("h1").innerHTML="⛳Yay Player 1 wins!!";
    document.querySelectorAll("p")[0].style.fontSize="3rem";
}
else if(random2==random1){
    document.querySelector("h1").innerHTML="😊Draw😊";
    
}
else{
    document.querySelector("h1").innerHTML="Yay Player 2 wins!!⛳";
    document.querySelectorAll("p")[1].style.fontSize="3rem";
}

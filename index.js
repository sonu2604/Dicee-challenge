var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImage1 = "images/dice" + randomNumber1 + ".png";
var randomImage2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", randomImage1);
document.querySelectorAll("img")[1].setAttribute("src", randomImage2);


if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML="🚩Player1 won"
}
else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML="Player2 won🚩"
}
else{
    document.querySelector("h1").innerHTML="Draw!"
}
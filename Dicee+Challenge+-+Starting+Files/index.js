let randomNumber1 = Math.floor(Math.random() * 6) + 1;

let randomNumber2 = Math.floor(Math.random() * 6) + 1;

let randomize1 = "images/dice" + String(randomNumber1) + ".png";
let randomize2 = "images/dice" + String(randomNumber2) + ".png";

let imageOne = document.querySelectorAll("img")[0];
imageOne.setAttribute("src", randomize1);

let imageTwo = document.querySelectorAll("img")[1];
imageTwo.setAttribute("src", randomize2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 wins!";
}
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 wins!";
}
else {
    document.querySelector("h1").innerHTML = "Draw!";
}











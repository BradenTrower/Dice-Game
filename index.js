let randomNumber1 = Math.trunc(Math.random() * 6) +1;  

let randomNumberImage = "dice" + randomNumber1 + ".png";

let randomImageSorce = "images/" + randomNumberImage;

let image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSorce); 


let randomNumber2 = Math.trunc(Math.random() * 6) +1;

let randomNumberImage2 = "dice" + randomNumber2 + ".png";

let randomImageSorce2 = "images/dice" + Math.trunc(Math.random() * 6) +1 + ".png";

let image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSorce2);



if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "player 1 Win!";
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "player 2 Win!";
} else {
    document.querySelector("h1").innerHTML = "Draw!";
};
 
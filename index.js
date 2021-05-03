var randomNumber1= Math.floor(Math.random()*6) +1;

var randomDiceimag1= "dice" +randomNumber1 + ".png";

var randomImgeSrc1 = "images/" + randomDiceimag1;

var image1= document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImgeSrc1);

var randomNumber2= Math.floor(Math.random()*6) +1;

var randomDiceimag2= "dice" +randomNumber2 + ".png";

var randomImgeSrc2 = "images/" + randomDiceimag2;

var image2= document.querySelectorAll("img")[1];

image2.setAttribute("src",randomImgeSrc2);

if(randomNumber2>randomNumber1)
{
	document.querySelector("h1").innerHTML="player 2 wins ";
}
else if(randomNumber1>randomNumber2)
{
	document.querySelector("h1").innerHTML="player 1 wins ";
}
else{
	document.querySelector("h1").innerHTML="draw ";
}
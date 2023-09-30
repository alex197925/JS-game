/** @format */
// Generate random number from 1 to 6.9999999999
let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;

// Select path of the images and combine together with randomNumber
randomImages1 = "images/dice" + randomNumber1 +  ".png";
randomImages2 = "images/dice" + randomNumber2 +  ".png";
console.log(randomImages1);



// Set to attribute src dynamic value of "randomImages1"
document.querySelector(".dice .img1").setAttribute("src", randomImages1);
document.querySelector(".dice .img2").setAttribute("src", randomImages2);


// Check for the winner
if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}else{
    document.querySelector("h1").innerHTML = "Draw!";
}
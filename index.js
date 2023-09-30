/** @format */
// Generate random number from 1 to 6.9999999999
let randomNumber1 = Math.floor(Math.random() * 6) + 1;


// Select path of the images and combine together with randomNumber
randomImages1 = "images/dice" + randomNumber1 +  ".png";
console.log(randomImages1);



// Set to attribute src dynamic value of "randomImages1"
document.querySelector(".dice .img1").setAttribute("src", randomImages1);



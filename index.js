var player1Score = 0;
var player2Score = 0;
var player1ScoreDisplay = document.querySelector("#player1")
var player2ScoreDisplay = document.querySelector("#player2")



document.getElementById("button").addEventListener("click", function(){

var randomNumber1 = (Math.floor(Math.random()*6)+1);
var randomNumber2 = (Math.floor(Math.random()*6)+1);


document.querySelector(".img1").setAttribute("src", "./images/dice"+randomNumber1+".png");
document.querySelector(".img2").setAttribute("src", "./images/dice"+randomNumber2+".png");
document.querySelector(".h2").style.display = "none";


if (randomNumber1 > randomNumber2){
    player1Score += 1;
    player1ScoreDisplay.innerHTML = "Player 1: " + player1Score;
} else if (randomNumber1 < randomNumber2){
    player2Score += 1;
    player2ScoreDisplay.innerHTML = "Player 2: " + player2Score;
} else {
    player1Score += 1;
    player1ScoreDisplay.innerHTML = "Player 1: " + player1Score;
    player2Score += 1;
    player2ScoreDisplay.innerHTML = "Player 2: " + player2Score;
}   

if (player1Score > player2Score) {
    player1ScoreDisplay.classList.add("isLeading");
    player2ScoreDisplay.classList.remove("isLeading");
}else if (player1Score < player2Score) {
    player2ScoreDisplay.classList.add("isLeading");
    player1ScoreDisplay.classList.remove("isLeading");
}else {
    player1ScoreDisplay.classList.remove("isLeading");
    player2ScoreDisplay.classList.remove("isLeading");
}


if ((player1Score === 7) && (player2Score <7)){
    document.querySelector("h1").innerHTML = "&#128681 Player 1 wins!"
    document.querySelector("#button").style.display = "none";
    document.querySelector("#playAgain").style.display = "block";
} else if ((player1Score < 7) && (player2Score === 7)){
    document.querySelector("h1").innerHTML = "Player 2 wins! &#128681"
    document.querySelector("#button").style.display = "none";
    document.querySelector("#playAgain").style.display = "block";
} else if ((player1Score === 7) && (player2Score === 7)){
    document.querySelector("h1").innerHTML = "It's a draw! &#128561"
    document.querySelector("#button").style.display = "none";
    document.querySelector("#playAgain").style.display = "block";
} 



})

document.getElementById("playAgain").addEventListener("click", function(){
    player1Score = 0;
    player1ScoreDisplay.innerHTML = "Player 1";
    player2Score =0;
    player2ScoreDisplay.innerHTML = "Player 2";
    document.querySelector("h1").innerHTML = "Welcome to Dice game!"
    document.querySelector("#button").style.display = "block";
    document.querySelector(".h2").style.display = "block";
    document.querySelector("#playAgain").style.display = "none";
    player1ScoreDisplay.classList.remove("isLeading");
    player2ScoreDisplay.classList.remove("isLeading");


})


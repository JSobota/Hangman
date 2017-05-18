var wordPool = ["Spiderman", "Iron Man", "Hulk", "Thor", "Captain America", "Black Widow", "Deadpool", "Wolverine", "Ant Man", "Star Lord", "Punisher", "Daredevil", "Iron Fist", "Luke Cage", "Jessica Jones"];
var randomWord;
var lettersGuessed =[];
var userGuess ;
var guesses = 7;
var wins = 0;
var losses = 0;
var emptyWord = [];

//Get random word
//Fill the array
//Set up onKeyUp event
//once key is pushed, .indexOf to check for letter
//if letter is NOT within word, then -1 from guesses
//Once guess reach 0 alert You Lost; add loss to loss row
//if letter guesse is IN word, display letter 
//if word is answered correctly +1 to wins row; allert YOU WIN!
//if word guessed; or guesses is 0, restart game


function newGame(){
	randomWord = wordPool[Math.floor(Math.random()*wordPool.length)]
	console.log(randomWord)

	for (var i = 0; i < randomWord.length; i++) {
		if (randomWord[i]===" ") {
			emptyWord[i]=" "
		}
		else { 
			emptyWord[i]="-"
		}
	}
	console.log(emptyWord)

	document.getElementById("currentWord").innerHTML = emptyWord.join("");
}

newGame()

document.onkeyup=function(event){
	userGuess = event.key
	console.log(userGuess)
}


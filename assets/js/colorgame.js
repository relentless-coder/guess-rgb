/* Intially, I tried using a different array to introduce colors for the easy mode, but from there on it turned out to be 

a lot of identical code used in different perspective, hence I am updating the code to a better version. I'll use the same array 

to introduce colors for both the levels. */

var numOfSquares = 6;

var colors = randomColors(numOfSquares);

var squares = document.querySelectorAll(".square");

var modes = document.querySelectorAll(".mode");

init();

function init() {
  modeButtions();
  reset();
}

function modeButtions() {
  
  for(var i = 0; i < modes.length; i++) {

    modes[0].removeEventListener("click", reset);

    modes[1].removeEventListener("click", reset);
  
    modes[i].addEventListener("click", function (){

    modes[0].classList.remove("selected");
  
    modes[1].classList.remove("selected");

    this.classList.add("selected");

    this.textContent === "Easy" ? numOfSquares = 3: numOfSquares = 6;

    reset();

    });
  }
}

function color() {
  var a = Math.floor(Math.random() * 250);
  var b = Math.floor(Math.random() * 250);
  var c = Math.floor(Math.random() * 250);
  return "rgb(" + [(a), (b), (c)].join(', ') + ")";
}

function randomColors(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
      arr.push(color());
    }

    return arr;
  }
  
var randomColor = colors[Math.floor(Math.random()*colors.length)].toUpperCase();


for (var j = 0; j < squares.length; j++) {
    
    squares[j].style.display = "block";
    
    squares[j].style.background = colors[j];

    squares[j].addEventListener("click", squareClicked);
  }

document.getElementById("guess").textContent = randomColor;

// refactoring a recurring code for hard mode, which sets up the conditions of the game. color of sqaures and picks the color to be guessed.

function reset() {

  colors = randomColors(numOfSquares);

  randomColor = colors[Math.floor(Math.random()*colors.length)].toUpperCase();

  document.getElementById("display").textContent = "";

  document.getElementById("reset").textContent = "New Colors";

  document.getElementById("header").style.background = "#79a9f7";

  document.getElementById("guess").textContent = randomColor;

  for (var j = 0; j < squares.length; j++) {
    
    if(colors[j]) {
      
      squares[j].style.background = colors[j];
      
      squares[j].style.display = "block";

      squares[j].addEventListener("click", squareClicked)
    
    } else {

      squares[j].style.display = "none";
      
      squares[j].removeEventListener("click", squareClicked);

    }
    
  }

}


// setting up the reset option of the game

document.getElementById("reset").addEventListener("click", function() {

  reset();

});


// the refactored function that runs when squares are clicked

function squareClicked() {
  
  var name = this.style.background.toUpperCase();

  // console.log(name, randomColor);

  if (name === randomColor) {

    document.getElementById("header").style.background = name;

    // document.querySelectorAll(".selected").style.background = name;

    document.getElementById("display").textContent = "Correct!";

    document.getElementById("reset").textContent = "Play again?";


    for (var k = 0; k < squares.length; k++) {
      squares[k].style.background = name;
    }

  } else {
    this.style.background = "#232323";
    document.getElementById("display").textContent = "Try again.";
  }
}
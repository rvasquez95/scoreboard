let homeScore = 0;
let guestScore = 0;




function hincrement(points) {
  homeScore += points; 
  document.getElementById("homescore").innerHTML = homeScore; 
}


function gincrement(points) {
  guestScore += points;
  document.getElementById("guestscore").innerHTML = guestScore;
}


// Implement the following by order
// 1. Add onclick handlers to every button. Maybe for button +1 increment1()
// 2. In this file handle those click's with functions
// 3. In those new functions mutate(change) the reset home/guest score
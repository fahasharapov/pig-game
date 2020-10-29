/*

Gameplay. Each turn, a player repeatedly rolls a die until either a 1 is rolled or the player decides to "hold": If the player rolls a 1, they score nothing and it becomes the next player's turn. If the player rolls any other number, it is added to their turn total and the player's turn continues.


*/


var scores, roundScore, activePlayer, dice;


scores = [0,0];
roundScore = 0;
activePlayer = 0;

dice = Math.floor(Math.random() * 6) + 1;


document.querySelector('#current--0').textContent = dice;
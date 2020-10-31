/*

Gameplay. Each turn, a player repeatedly rolls a die until either a 1 is rolled or the player decides to "hold": If the player rolls a 1, they score nothing and it becomes the next player's turn. If the player rolls any other number, it is added to their turn total and the player's turn continues.

Also, a player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn.

*/


var scores, roundScore, activePlayer, dice, gameOn, lastDice;


init();


//ROLL BUTTON

document.querySelector('.btn--roll').addEventListener('click', function(){

	if (gameOn){

	//Random number
	var dice = Math.floor(Math.random() * 6) + 1;
	console.log(dice);

	//Display result
	document.querySelector('.dice').style.display = "block";
	document.querySelector('.dice').src = 'img/dice-' + dice + '.png';

	//Update the round score IF the dice rolls a 6 twice.
	if (dice === 6 && lastDice === 6){
		scores[activePlayer] = 0;
		document.querySelector('#score--' + activePlayer).textContent = "0";
		nextPlayer();
	}

	//Update the round score IF the rolled number was NOT a 1
	else if (dice !== 1){
		//Add score
		roundScore += dice;
		document.querySelector('#current--' + activePlayer).textContent = roundScore;
	}
	else {
		//Next player
			nextPlayer();
	}

	lastDice = dice;
}
});


//HOLD BUTTON

document.querySelector('.btn--hold').addEventListener('click', function(){

	if(gameOn){
	
	//Add CURRENT score to GLOBAL score
		scores[activePlayer] += roundScore;

	//Update the UI
		document.querySelector('#score--' + activePlayer).textContent = scores[activePlayer];

	//Check if player reached a score 100
	if (scores[activePlayer] >= 100) {
		document.querySelector('#name--' + activePlayer).textContent = "WINNER!";
		document.querySelector('.dice').style.display = "none";
		gameOn = false;
	} else {

	//Next Player
		nextPlayer();
		}
	}
});
	

//NEW GAME BUTTON

document.querySelector('.btn--new').addEventListener('click', init);


function init(){

	scores = [0,0];
	roundScore = 0;
	activePlayer = 0;
	gameOn = true;

	document.querySelector('.dice').style.display = "none";

	document.querySelector('#score--0').textContent = '0';
	document.querySelector('#score--1').textContent = '0';
	document.querySelector('#current--0').textContent = '0';
	document.querySelector('#current--1').textContent = '0';

	document.querySelector('#name--0').textContent = "Player 1";
	document.querySelector('#name--1').textContent = "Player 2";

	document.querySelector('.player--1').classList.remove('player--active');
	document.querySelector('.player--0').classList.add('player--active');

}


	//Next player function

	function nextPlayer(){
		roundScore = 0;
		document.querySelector('#current--' + activePlayer).textContent = roundScore;
		activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

		document.querySelector('.player--0').classList.toggle('player--active');
		document.querySelector('.player--1').classList.toggle('player--active');

		document.querySelector('.dice').style.display = "none";
	}



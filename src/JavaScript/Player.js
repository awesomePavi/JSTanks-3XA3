/*
Author: Viren Patel

The player class

*/

// 
/**
 * Represents a player tank.
 * @constructor
 * @see {@link Tank} for constructor details. 
 */
var Player = function(tileSize, x, y, gameBoard){
	Tank.call(this, tileSize, x, y, gameBoard);
}

// Player inherits Tank
inherits(Player, Tank);

//Interacts with key inputs from the webpage
/**
 * Moves the player tank according to the input from the user.
 * @param {event} A keyboard event
 */
Player.prototype.interface = function(event) {
	//get key pressed
   var keyIn = event.which;
   if (keyIn==40) //Arrow down
   		this.moveDown();
   else if(keyIn==38) //Arrow up
   		this.moveUp();
		else if(keyIn==37) //Arrow left
   		this.moveLeft();
   else if(keyIn==39) //Arrow right
   		this.moveRight();
	else if(keyIn==70){
		this.board.fire (this.x, this.y, 3);
	}   	
}
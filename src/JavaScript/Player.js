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
var Player = function(tileSize, x, y, gameBoard, direction, type){
	Tank.call(this, tileSize, x, y, gameBoard, direction, type);
}

// Player inherits Tank
inherits(Player, Tank);

//Interacts with key inputs from the webpage
/**
 * Moves the player tank according to the input from the user.
 * @param {event} A keyboard event
 */
Player.prototype.interface = function(event) {
	//ensure playe only moves once per frame
	if (this.movedThisRound)
		return;
	//get key pressed
	var keyIn = event.which;
	if (keyIn==40){ //Arrow down
   		this.moveDown();
   		this.movedThisRound = true; //ensure player only moves once per frame
	}else if(keyIn==38){ //Arrow up
   		this.moveUp();
	this.movedThisRound = true; //ensure player only moves once per frame
	}else if(keyIn==37){ //Arrow left
   		this.moveLeft();
	this.movedThisRound = true; //ensure player only moves once per frame
	}else if(keyIn==39){ //Arrow right
   		this.moveRight();
	this.movedThisRound = true; //ensure player only moves once per frame
	}else if(keyIn==70){
		this.movedThisRound = true;
		if (this.direction == 1)
			this.board.fire (this.x, this.y, 4);		
		else if (this.direction == 2)
			this.board.fire (this.x, this.y, 3);
		else if (this.direction == 3)
			this.board.fire (this.x, this.y, 2);
		else 
			this.board.fire (this.x, this.y, 1);		
	}   	
}
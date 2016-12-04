/*
Author: Viren Patel

The player class
A tank controlled by the user.

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

/**
 * Moves the player tank according to the input from the user.
 * @param {event} A keyboard event
 */
Player.prototype.interface = function(event) {

	//get key pressed
	var keyIn = event.which;
	//fire weapon
	if(keyIn==70){
		if (this.direction == 1)
			this.board.fire (this.x, this.y, 4);		
		else if (this.direction == 2)
			this.board.fire (this.x, this.y, 3);
		else if (this.direction == 3)
			this.board.fire (this.x, this.y, 2);
		else 
			this.board.fire (this.x, this.y, 1);		
	}   
	//rotational frame independent
	if (keyIn==40){ //Arrow down
   		this.direction = 2;
	}else if(keyIn==38){ //Arrow up
		this.direction = 1;
	}else if(keyIn==37){ //Arrow left
		this.direction = 3;
	}else if(keyIn==39){ //Arrow right
		this.direction = 4;
	}	

	//ensure playe only moves once per frame
	if (this.movedThisRound > 0)
		return;
	if (keyIn==40){ //Arrow down
   		this.movedThisRound = 4; //ensure player only moves once per frame
   		this.moveDown();
	}else if(keyIn==38){ //Arrow up
		this.movedThisRound = 4; //ensure player only moves once per frame
		this.moveUp();
	}else if(keyIn==37){ //Arrow left
		this.movedThisRound = 4; //ensure player only moves once per frame
		this.moveLeft();
	}else if(keyIn==39){ //Arrow right
		this.movedThisRound = 4; //ensure player only moves once per frame
		this.moveRight();
	}	
}

/**
 * Lower the health of tank when hit by a projectile. 
 * @param {number} hitStrength - The strengh of the projectile.
 */
Player.prototype.hit = function (hitStrength){
	console.log("hi");
	this.health -= hitStrength;
	if (this.health <= 0 ){
		endGame("YOU DIED","YOU LOSE");
	}
}
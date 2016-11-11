/*
Author: Viren Patel

The bot class

*/

/**
 * Represents a bot tank.
 * @constructor
 * @see {@link Tank} for constructor details. 
 */
var Bot = function(tileSize, x, y, gameBoard){
	Tank.call(this, tileSize, x, y, gameBoard);
}


// Bot inherits Tank
inherits(Bot, Tank);

/**
 * Movement logic for the bots : random or towards player tank
 * @param {Player} playerTank - A Player object.
 * @param {number} x - The x value of the player's position.
 * @param {number} y - The y value of the player's position.
 */
Bot.prototype.movementLogic = function(playerTank, x, y, direction) {
	var rand = Math.floor(Math.random()*5)+1;
	if (rand == 1){
		this.moveUp();
	} else if (rand == 2){
		this.moveDown();
	} else if (rand == 3){
		this.moveLeft();
	} else if (rand == 4){
		this.moveRight();
	} else if (rand == 5){
		if (this.x < playerTank.x){
			this.moveRight();
		} else if (this.y < playerTank.y){
			this.moveDown();
		} else if (this.x > playerTank.x){
			this.moveLeft();
		} else if (this.y > playerTank.y){
			this.moveUp();
		}
	}
}

// 
Bot.prototype.Flag = function(){
	return true;
}


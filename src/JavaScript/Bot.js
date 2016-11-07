/*
Author: Viren Patel

The bot class

*/

// Bot tank definition
// calls the constructor of the Tank class
var Bot = function(tileSize, x, y, gameBoard){
	Tank.call(this, tileSize, x, y, gameBoard);
}


// Bot inherits Tank
inherits(Bot, Tank);

// Decide the movement of bot tank: random or towards target
Bot.prototype.movementLogic = function(playerTank, x, y) {
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


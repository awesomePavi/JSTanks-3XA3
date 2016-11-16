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
	//ensure ai only moves once per frame
	if (this.movedThisRound)
		return;
	var rand = 5;//Math.floor(Math.random()*5)+1;
	if (rand == 1){
		this.moveUp();
		this.movedThisRound = true; //ensure AI only moves once per frame
	} else if (rand == 2){
		this.moveDown();
		this.movedThisRound = true; //ensure AI only moves once per frame
	} else if (rand == 3){
		this.moveLeft();
		this.movedThisRound = true; //ensure AI only moves once per frame
	} else if (rand == 4){
		this.moveRight();
		this.movedThisRound = true; //ensure AI only moves once per frame
	} else if (rand == 5){
		if (this.x < playerTank.x && board.canBePlaced(this.x+1,this.y)){
			console.log(board.canBePlaced(this.x-1,this.y));
			this.moveRight();
			this.movedThisRound = true; //ensure AI only moves once per frame
		} else if (this.y < playerTank.y && board.canBePlaced(this.x,this.y+1)){
			this.moveDown();
			this.movedThisRound = true; //ensure AI only moves once per frame
		} else if (this.x > playerTank.x && board.canBePlaced(this.x-1,this.y)){
			this.moveLeft();
			this.movedThisRound = true; //ensure AI only moves once per frame
		} else if (this.y > playerTank.y && board.canBePlaced(this.x,this.y-1)){
			this.moveUp();
			this.movedThisRound = true; //ensure AI only moves once per frame
		}
	}
}

// 
Bot.prototype.Flag = function(){
	return true;
}


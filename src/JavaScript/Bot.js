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
	var rand = Math.floor(Math.random()*6)+1;
	var rand1 = Math.floor(Math.random()*6)+1;
	moveUp = true;
	moveDown = true;
	moveLeft = true;
	moveRight = true;
	if (rand == 8 && moveUp){
		this.moveUp();
		this.movedThisRound = true; //ensure AI only moves once per frame
		if (rand1 == 2){
				this.board.fire (this.x, this.y, 4);	
				moveUp = false;
				moveDown = true;
				moveLeft = true;
				moveRight = true;
		}
	} else if (rand == 8 && moveDown){
		this.moveDown();
		this.movedThisRound = true; //ensure AI only moves once per frame
		if (rand1 == 2){
				this.board.fire (this.x, this.y, 3);	
				moveUp = true;
				moveDown = false;
				moveLeft = true;
				moveRight = true;
		}
	} else if (rand == 8 && moveLeft){
		this.moveLeft();
		this.movedThisRound = true; //ensure AI only moves once per frame
		if (rand1 == 2){
				this.board.fire (this.x, this.y, 2);	
				moveUp = true;
				moveDown = true;
				moveLeft = false;
				moveRight = true;
		}
	} else if (rand == 8 && moveRight){
		this.moveRight();
		this.movedThisRound = true; //ensure AI only moves once per frame
		if (rand1 == 2){
				this.board.fire (this.x, this.y, 1);	
				moveUp = true;
				moveDown = true;
				moveLeft = true;
				moveRight = false;
		}
	} else if (rand == 5){
		if (this.x < playerTank.x && board.canBePlaced(this.x+1,this.y) && moveRight){
			console.log(board.canBePlaced(this.x-1,this.y));
			this.moveRight();
			this.movedThisRound = true; //ensure AI only moves once per frame
			if (rand1 == 2){
				this.board.fire (this.x, this.y, 1);	
				moveUp = true;
				moveDown = true;
				moveLeft = true;
				moveRight = false;
			}
		} else if (this.y < playerTank.y && board.canBePlaced(this.x,this.y+1) && moveDown){
			this.moveDown();
			this.movedThisRound = true; //ensure AI only moves once per frame
			if (rand1 == 2){
				this.board.fire (this.x, this.y, 3);	
				moveUp = true;
				moveDown = false;
				moveLeft = true;
				moveRight = true;
			}
		} else if (this.x > playerTank.x && board.canBePlaced(this.x-1,this.y) && moveLeft){
			this.moveLeft();
			this.movedThisRound = true; //ensure AI only moves once per frame
			if (rand1 == 2){
				this.board.fire (this.x, this.y, 2);	
				moveUp = true;
				moveDown = true;
				moveLeft = false;
				moveRight = true;
			}
		} else if (this.y > playerTank.y && board.canBePlaced(this.x,this.y-1) && moveUp){
			this.moveUp();
			this.movedThisRound = true; //ensure AI only moves once per frame
			if (rand1 == 2){
				this.board.fire (this.x, this.y, 4);	
				moveUp = false;
				moveDown = true;
				moveLeft = true;
				moveRight = true;
			}
		}
	} else if (rand == 6){
		if (this.y < 14 && board.canBePlaced(this.x+1,this.y) && moveDown){
			this.moveDown();
			this.movedThisRound = true; //ensure AI only moves once per frame
			if (rand1 == 2){
				this.board.fire (this.x, this.y, 3);	
				moveUp = true;
				moveDown = false;
				moveLeft = true;
				moveRight = true;
			}
		} else if (this.x > 7 && board.canBePlaced(this.x+1,this.y) && moveLeft){
			this.moveLeft();
			this.movedThisRound = true; //ensure AI only moves once per frame
			if (rand1 == 2){
				this.board.fire (this.x, this.y, 2);	
				moveUp = true;
				moveDown = true;
				moveLeft = false;
				moveRight = true;
			}
		} else if (this.x < 7 && board.canBePlaced(this.x+1,this.y) && moveRight){
			this.moveRight();
			this.movedThisRound = true; //ensure AI only moves once per frame
			if (rand1 == 2){
				this.board.fire (this.x, this.y, 1);	
				moveUp = true;
				moveDown = true;
				moveLeft = true;
				moveRight = false;
			}
		}
	}
}

// 
Bot.prototype.Flag = function(){
	return true;
}


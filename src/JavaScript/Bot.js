/*
Author: Viren Patel

The bot class

*/

/**
 * Represents a bot tank.
 * @constructor
 * @see {@link Tank} for constructor details. 
 */
var Bot = function(tileSize, x, y, gameBoard, direction, type){
	Tank.call(this, tileSize, x, y, gameBoard, direction, type);
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
	
	targetAssigned = false;
	
	// assign a target (player or home base)
	if (!targetAssigned){
		var rand = Math.floor(Math.random()*2)+1;
		target = rand;
		targetAssigned = true;
		baseNum = Math.floor(Math.random()*6)+1; // which base to attack
	}
	
	// fire this frame or not
	fire = Math.floor(Math.random()*2)+1;
	
	
	if (target == 1){
		if (this.x < playerTank.x && board.canBePlaced(this.x+1,this.y)){
			this.moveRight();
			this.movedThisRound = true; //ensure AI only moves once per frame			
			if (fire == 1)
				this.board.fire (this.x, this.y, 1);
		} else if (this.y < playerTank.y && board.canBePlaced(this.x,this.y+1)){
			this.moveDown();
			this.movedThisRound = true; //ensure AI only moves once per frame
			if (fire == 1)
				this.board.fire (this.x, this.y, 3);
		} else if (this.x > playerTank.x && board.canBePlaced(this.x-1,this.y)){
			this.moveLeft();
			this.movedThisRound = true; //ensure AI only moves once per frame		
			if (fire == 1)			
				this.board.fire (this.x, this.y, 2);
		} else if (this.y > playerTank.y && board.canBePlaced(this.x,this.y-1)){
			this.moveUp();
			this.movedThisRound = true; //ensure AI only moves once per frame
			if (fire == 1)
				this.board.fire (this.x, this.y, 4);
		} else if (this.direction == 1){
			this.board.fire(this.x,this.y, 4);
		} else if (this.direction == 2){
			this.board.fire(this.x,this.y, 3);
		} else if (this.direction == 3){
			this.board.fire(this.x,this.y, 2);
		} else if (this.direction == 4){
			this.board.fire(this.x,this.y, 1);
		}
	}else{
		if (map == 1){
			if (this.y < 14 && board.canBePlaced(this.x,this.y+1)){
				this.moveDown();
				this.movedThisRound = true; //ensure AI only moves once per frame	
				if (fire == 1)
					this.board.fire (this.x, this.y, 3);
			} else if (this.x >= 7 && board.canBePlaced(this.x-1,this.y)){
				this.moveLeft();
				this.movedThisRound = true; //ensure AI only moves once per frame
				if (fire == 1)
					this.board.fire (this.x, this.y, 2);				
			} else if (this.x < 7 && board.canBePlaced(this.x+1,this.y)){
				this.moveRight();
				this.movedThisRound = true; //ensure AI only moves once per frame
				if (fire == 1)
					this.board.fire (this.x, this.y, 1);
			} else if (this.direction == 1){
				this.board.fire(this.x,this.y, 4);
			} else if (this.direction == 2){
				this.board.fire(this.x,this.y, 3);
			} else if (this.direction == 3){
				this.board.fire(this.x,this.y, 2);
			} else if (this.direction == 4){
				this.board.fire(this.x,this.y, 1);
			}			
		}else {
			if (baseNum == 1){
				if (this.x > 1 && board.canBePlaced(this.x-1,this.y)){
					this.moveLeft();
					this.movedThisRound = true; //ensure AI only moves once per frame	
					if (fire == 1)
						this.board.fire (this.x, this.y, 3);
				} else if (this.y >= 7 && board.canBePlaced(this.x,this.y-1)){
					this.moveUp();
					this.movedThisRound = true; //ensure AI only moves once per frame
					if (fire == 1)
						this.board.fire (this.x, this.y, 2);				
				} else if (this.y < 7 && board.canBePlaced(this.x,this.y+1)){
					this.moveDown();
					this.movedThisRound = true; //ensure AI only moves once per frame
					if (fire == 1)
						this.board.fire (this.x, this.y, 1);
				} else if (this.direction == 1){
					this.board.fire(this.x,this.y, 4);
				} else if (this.direction == 2){
					this.board.fire(this.x,this.y, 3);
				} else if (this.direction == 3){
					this.board.fire(this.x,this.y, 2);
				} else if (this.direction == 4){
					this.board.fire(this.x,this.y, 1);
			}					
			}else if (baseNum == 2){
				if (this.y >= 7 && board.canBePlaced(this.x,this.y-1)){
					this.moveUp();
					this.movedThisRound = true; //ensure AI only moves once per frame	
					if (fire == 1)
						this.board.fire (this.x, this.y, 3);
				} else if (this.x >= 7 && board.canBePlaced(this.x-1,this.y)){
					this.moveLeft();
					this.movedThisRound = true; //ensure AI only moves once per frame
					if (fire == 1)
						this.board.fire (this.x, this.y, 2);					
				} else if (this.y < 7 && board.canBePlaced(this.x,this.y+1)){
					this.moveDown();
					this.movedThisRound = true; //ensure AI only moves once per frame	
					if (fire == 1)
						this.board.fire (this.x, this.y, 3);
				} else if (this.x < 7 && board.canBePlaced(this.x+1,this.y)){
					this.moveRight();
					this.movedThisRound = true; //ensure AI only moves once per frame
					if (fire == 1)
						this.board.fire (this.x, this.y, 1);
				} else if (this.direction == 1){
					this.board.fire(this.x,this.y, 4);
				} else if (this.direction == 2){
					this.board.fire(this.x,this.y, 3);
				} else if (this.direction == 3){
					this.board.fire(this.x,this.y, 2);
				} else if (this.direction == 4){
					this.board.fire(this.x,this.y, 1);
			}					
			}else if (baseNum == 3){
				if (this.x < 14 && board.canBePlaced(this.x+1,this.y)){
					this.moveRight();
					this.movedThisRound = true; //ensure AI only moves once per frame	
					if (fire == 1)
						this.board.fire (this.x, this.y, 3);
				} else if (this.y >= 7 && board.canBePlaced(this.x,this.y-1)){
					this.moveUp();
					this.movedThisRound = true; //ensure AI only moves once per frame
					if (fire == 1)
						this.board.fire (this.x, this.y, 2);				
				} else if (this.y < 7 && board.canBePlaced(this.x,this.y+1)){
					this.moveDown();
					this.movedThisRound = true; //ensure AI only moves once per frame
					if (fire == 1)
						this.board.fire (this.x, this.y, 1);
				} else if (this.direction == 1){
					this.board.fire(this.x,this.y, 4);
				} else if (this.direction == 2){
					this.board.fire(this.x,this.y, 3);
				} else if (this.direction == 3){
					this.board.fire(this.x,this.y, 2);
				} else if (this.direction == 4){
					this.board.fire(this.x,this.y, 1);
			}					
			}else if (baseNum == 4){
				if (this.y >= 12 && board.canBePlaced(this.x,this.y-1)){
					this.moveUp();
					this.movedThisRound = true; //ensure AI only moves once per frame	
					if (fire == 1)
						this.board.fire (this.x, this.y, 3);
				} else if (this.x >= 4 && board.canBePlaced(this.x-1,this.y)){
					this.moveLeft();
					this.movedThisRound = true; //ensure AI only moves once per frame
					if (fire == 1)
						this.board.fire (this.x, this.y, 2);					
				} else if (this.y < 12 && board.canBePlaced(this.x,this.y+1)){
					this.moveDown();
					this.movedThisRound = true; //ensure AI only moves once per frame	
					if (fire == 1)
						this.board.fire (this.x, this.y, 3);
				} else if (this.x < 4 && board.canBePlaced(this.x+1,this.y)){
					this.moveRight();
					this.movedThisRound = true; //ensure AI only moves once per frame
					if (fire == 1)
						this.board.fire (this.x, this.y, 1);
				} else if (this.direction == 1){
					this.board.fire(this.x,this.y, 4);
				} else if (this.direction == 2){
					this.board.fire(this.x,this.y, 3);
				} else if (this.direction == 3){
					this.board.fire(this.x,this.y, 2);
				} else if (this.direction == 4){
					this.board.fire(this.x,this.y, 1);
			}					
			}else if (baseNum == 5){
				if (this.y >= 12 && board.canBePlaced(this.x,this.y-1)){
					this.moveUp();
					this.movedThisRound = true; //ensure AI only moves once per frame	
					if (fire == 1)
						this.board.fire (this.x, this.y, 3);
				} else if (this.x >= 12 && board.canBePlaced(this.x-1,this.y)){
					this.moveLeft();
					this.movedThisRound = true; //ensure AI only moves once per frame
					if (fire == 1)
						this.board.fire (this.x, this.y, 2);					
				} else if (this.y < 12 && board.canBePlaced(this.x,this.y+1)){
					this.moveDown();
					this.movedThisRound = true; //ensure AI only moves once per frame	
					if (fire == 1)
						this.board.fire (this.x, this.y, 3);
				} else if (this.x < 12 && board.canBePlaced(this.x+1,this.y)){
					this.moveRight();
					this.movedThisRound = true; //ensure AI only moves once per frame
					if (fire == 1)
						this.board.fire (this.x, this.y, 1);
				} else if (this.direction == 1){
					this.board.fire(this.x,this.y, 4);
				} else if (this.direction == 2){
					this.board.fire(this.x,this.y, 3);
				} else if (this.direction == 3){
					this.board.fire(this.x,this.y, 2);
				} else if (this.direction == 4){
					this.board.fire(this.x,this.y, 1);
			}									
			}else{
				if (this.y < 14 && board.canBePlaced(this.x,this.y+1)){
					this.moveDown();
					this.movedThisRound = true; //ensure AI only moves once per frame	
					if (fire == 1)
						this.board.fire (this.x, this.y, 3);
				} else if (this.x >= 7 && board.canBePlaced(this.x-1,this.y)){
					this.moveLeft();
					this.movedThisRound = true; //ensure AI only moves once per frame
					if (fire == 1)
						this.board.fire (this.x, this.y, 2);				
				} else if (this.x < 7 && board.canBePlaced(this.x+1,this.y)){
					this.moveRight();
					this.movedThisRound = true; //ensure AI only moves once per frame
					if (fire == 1)
						this.board.fire (this.x, this.y, 1);
				} else if (this.direction == 1){
					this.board.fire(this.x,this.y, 4);
				} else if (this.direction == 2){
					this.board.fire(this.x,this.y, 3);
				} else if (this.direction == 3){
					this.board.fire(this.x,this.y, 2);
				} else if (this.direction == 4){
					this.board.fire(this.x,this.y, 1);
			}	
			}
		}
		
	}
}

// 
Bot.prototype.Flag = function(){
	return true;
}

	
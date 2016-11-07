/*
Author: Viren Patel

The bot class

*/

var Bot = function(tileSize, x, y){
	Tank.call(this, tileSize, x, y);
}

inherits(Bot, Tank);


Bot.prototype.movementLogic = function(Player tank, x, y) {
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
		if (this.x < tank.x){
			this.moveRight();
		} else if (this.y < tank.y){
			this.moveDown();
		} else if (this.x > tank.x){
			this.moveLeft();
		} else if (this.y > tank.y){
			this.moveUp();
		}
	}
}


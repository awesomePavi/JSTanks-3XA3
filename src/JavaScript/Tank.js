/*
Author: Viren Patel


*/

var Tank = function (tileSize, tankImage) {
	this.posX = tileSize*5;
	this.posY = tileSize*5;
	this.attack = false; 
	this.health = 100;
	this.currentImage = tankImage; 
	
}

// function for tank's movement (input = up/down/left/right??)
Tank.prototype.movement (input){
	
}

// function to determine if the tank will take damage or not
Tank.prototype.damage (x, y){
	
}

// function to update the image of the tank (full health, damaged, destroyed,..)
Tank.prototype.updateImage (newImage){
	
}
/*
Author: Viren Patel


*/

// function to take in the keyboard input
keyPressed = function() {
	
}

var Tank = function (tileSize, tankImage) {
	this.moveSize = tileSize;
	this.posX = tileSize*5;
	this.posY = tileSize*5;
	this.attack = false; 
	this.health = 100;
	this.currentImage = tankImage; 
	
}

// function to determine if the tank will take damage or not
Tank.prototype.damage = function(x, y) {
	
}

// function to update the image of the tank (full health, damaged, destroyed,..)
Tank.prototype.updateImage = function(newImage) {
	
}

    
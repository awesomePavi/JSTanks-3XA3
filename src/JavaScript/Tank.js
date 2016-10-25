/*
Author: Viren Patel


*/

//import the tank images
var pic = new Image();
pic.src = ""picture.jpg";

// function to take in the keyboard input
keyPressed = function(){
	
}

// Tank object constructor and definition
var Tank = function (tileSize, tankImage){
	this.moveSize = tileSize;
	this.posX = tileSize*5;
	this.posY = tileSize*5;
	this.attack = false; 
	this.health = 100;
	this.currentImage = tankImage; 
	
	
}

Tank.prototype.draw = function (x, y, drawImage){
	
}

// function to determine if the tank will take damage or not
Tank.prototype.damage = function(x, y){
	
}

// function to update the tank's attributes
Tank.prototype.update = function(){
	this.updatePos();
	this.updateImage();
}

// function to update the tank's position according to the input
Tank.prototype.updatePos = function(){	
		if (keyCode === UP){
			this.posY += this.moveSize;
		}
		if (keyCode === DOWN){
			this.posY -= this.moveSize;
		}
		if (keyCode === LEFT){
			this.posX -= this.moveSize;
		}
		if (keyCode === RIGHT){
			this.posY += this.moveSize;
		}	
}

// function to update the image of the tank (full health, damaged, destroyed,..)
Tank.prototype.updateImage = function(){
	
}

    
/*
Author: Viren Patel


*/

//import the tank images
var pic = new Image();
pic.src = "../Images/tank.jpg";

// function to take in the keyboard input
keyPressed = function(){
	
}

/*
// Tank object constructor and definition
var Tank = function (tileSize){
	this.moveSize = tileSize;
	this.posX = tileSize*5;
	this.posY = tileSize*5;
	this.attack = false; 
	this.health = 100;
	this.currentImage = tankImage; 
	
	
}
*/

/*
Tank.prototype.draw = function (x, y, drawImage){
	var ctx = document.getElementById('Game').getContext('2d');
	//drawImage(picture, X, Y)
	//drawImage(picture, X, Y, width, height)
	ctx.drawImage(pic, 100, 100);
}
*/

var Tank = function (tileSize){
	this.m_canvas = document.createElement('canvas');
	this.m_canvas.width = tileSize;
	this.m_canvas.height = tileSize;
	var m_context = this.m_canvas.getContext("2d");
	var img = new Image();
	img.src = "../Images/tank.png";
	img.onload = function()
   	{
   		m_context.drawImage(img,0,0,tileSize,tileSize);
   	}
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

//
Tank.prototype.type = function(){
	return "BLANK";
}

Tank.prototype.hit = function (hitStength){
	
}

Tank.prototype.getHealth = function (hitStength){
	
}

Tank.prototype.getPosition = function (){
	return this.x, this.y;
}

Tank.prototype.draw = function(canvas,startx,startY,tileSize){
	canvas.drawImage(this.m_canvas,startx,startY);
	
}


	
    
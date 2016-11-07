/*
Author: Viren Patel

The tank object used in the game.
Different images representing different states of the tank.
(full health, dammaged, destropyed) <<<<to be implemented>>>>

*/

// code to allow inheritance 
function inherits(ctor, superCtor) {
  ctor.super_ = superCtor;
  ctor.prototype = Object.create(superCtor.prototype, {
    constructor: {
      value: ctor,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
};

/* 
Tank constructor and definition
tileSize: the width/height of any one tile in the grid
*/
var Tank = function (tileSize, x, y, gameBoard){
	this.board = gameBoard;
	this.x = x;
	this.y = y;
	this.health = 100;
	this.m_canvas = document.createElement('canvas');
	this.m_canvas.width = tileSize;
	this.m_canvas.height = tileSize;
	var m_context = this.m_canvas.getContext("2d");
	var img = new Image();
	img.src = "../Images/tankUp.png";
	img.onload = function()
   	{
   		m_context.drawImage(img,0,0,tileSize,tileSize);
   	}
}

// method to draw the tank image - called by GameBoard
Tank.prototype.draw = function(canvas,startx,startY,tileSize){
	canvas.drawImage(this.m_canvas,startx,startY);
}

//
Tank.prototype.type = function(){
	return "TANK";
}

// Lower the tank's health by hitStrength when it gets hit
Tank.prototype.hit = function (hitStrength){
	this.health -= hitStrength;
}

// returns the tank's health
Tank.prototype.getHealth = function (){
	return this.health;
}

// return the tank's position in x and y co-ordinates
Tank.prototype.getPosition = function (){
	return this.x, this.y;
}

// move the tank up one tile if possible
Tank.prototype.moveUp = function(){
	if (this.board.canBePlaced(this.x, this.y-1)){
		this.y = this.y - 1;
	}
}

// move the tank down one tile if possible
Tank.prototype.moveDown = function(){
	if (this.board.canBePlaced(this.x, this.y+1)){
		this.y = this.y + 1;
	}
}

// move the tank left one tile if possible
Tank.prototype.moveLeft = function(){
	if (this.board.canBePlaced(this.x-1, this.y)){
		this.x = this.x - 1;
	}
}

// move the tank right one tile if possible
Tank.prototype.moveRight = function(){
	if (this.board.canBePlaced(this.x+1, this.y)){
		this.x = this.x + 1;
	}
}


	
    
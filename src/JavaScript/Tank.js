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

/**
 * Represents a Tank.
 * @constructor 
 * @param {number} tileSize - The size of one tile in the grid.
 * @param {number} x - the value of the x co-ordinate of the tank object as per the array in GameBoard.js .
 * @param {number} y - the value of the y co-ordinate of the tank object as per the array in GameBoard.js .
 * @param {GameBoard} - A GameBoard object.
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
	
	var tankUp = new Image();
	var tankDown = new Image();
	var tankLeft = new Image();
	var tankRight = new Image();
	var tankDmgUp = new Image();
	var tankDmgDown = new Image();
	var tankDmgLeft = new Image();
	var tankDmgRight = new Image();

	tankUp.src = "../Images/tankUp.png";
	tankDown.src = "../Images/tankDown.png";
	tankLeft.src = "../Images/tankLeft.png";
	tankRight.src = "../Images/tankRight.png";
	tankDmgUp.src = "../Images/tankDmgUp.png";
	tankDmgDown.src = "../Images/tankDmgDown.png";
	tankDmgLeft.src = "../Images/tankDmgLeft.png";
	tankDmgRight.src = "../Images/tankDmgRight.png";
	
	var img = new Image();
	img.src = "../Images/tankUp.png";
	img.onload = function()
   	{
   		m_context.drawImage(img,0,0,tileSize,tileSize);
   	}
}

/**
 * Draw the tank image on the game board.
 * @param {canvas} canvas - The canvas for the Tank image.
 * @param {number} startx - The starting x co-ordinate for the tank image.
 * @param {number} startY - The starting y co-ordinate for the tank image.
 * @param {number} tileSize - The size of one tile in the grid.
 */
Tank.prototype.draw = function(canvas,startx,startY,tileSize){
	canvas.drawImage(this.m_canvas,startx,startY);
}

/**
 * Give the type of the object
 * @return {string} The type of the Tank object
 */
Tank.prototype.type = function(){
	return "TANK";
}

/**
 * Lower the health of tank when hit by a projectile. 
 * @param {number} hitStrength - The strengh of the projectile.
 */
Tank.prototype.hit = function (hitStrength){
	this.health -= hitStrength;
}

/**
 * Give the tank's health.
 * @return {number} - The tank's health.
 */
Tank.prototype.getHealth = function (){
	return this.health;
}

// return the tank's position in x and y co-ordinates
/**
 * Give the x and y co-ordinates of the tank object.
 * @return {number} The x value.
 * @return {number} The y value.
 */
Tank.prototype.getPosition = function (){
	return this.x, this.y;
}

/**
 * Move the tank's position up one tile if possible.
 */
Tank.prototype.moveUp = function(){
	if (this.board.canBePlaced(this.x, this.y-1)){
		this.board.moveTo(this.x,this.y,this.x,this.y-1);
		this.y = this.y - 1;
	}
}

/**
 * Move the tank's position down one tile if possible.
 */
Tank.prototype.moveDown = function(){
	if (this.board.canBePlaced(this.x, this.y+1)){
		this.board.moveTo(this.x,this.y,this.x,this.y+1);
		this.y = this.y + 1;
	}
}

/**
 * Move the tank's position up left tile if possible.
 */
Tank.prototype.moveLeft = function(){
	if (this.board.canBePlaced(this.x-1, this.y)){
		this.board.moveTo(this.x,this.y,this.x-1,this.y);
		this.x = this.x - 1;
	}
}

/**
 * Move the tank's position right one tile if possible.
 */
Tank.prototype.moveRight = function(){
	if (this.board.canBePlaced(this.x+1, this.y)){
		this.board.moveTo(this.x,this.y,this.x+1,this.y);
		this.x = this.x + 1;
	}
}
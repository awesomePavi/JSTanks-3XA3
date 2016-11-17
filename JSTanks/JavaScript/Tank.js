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
var Tank = function (tileSize, x, y, gameBoard, direction){
	this.movedThisRound = false; //boolean to ensure that tank only moves once per frame 
	this.board = gameBoard;
	this.x = x;
	this.y = y;
	this.health = 100;
	this.direction = 1; // 1=up, 2= down, 3=left, 4=right

	this.m_canvas1 = document.createElement('canvas');
	this.m_canvas1.width = tileSize;
	this.m_canvas1.height = tileSize;
	var m_context1 = this.m_canvas1.getContext("2d");
	
	this.m_canvas2 = document.createElement('canvas');
	this.m_canvas2.width = tileSize;
	this.m_canvas2.height = tileSize;
	var m_context2 = this.m_canvas2.getContext("2d");
	
	this.m_canvas3 = document.createElement('canvas');
	this.m_canvas3.width = tileSize;
	this.m_canvas3.height = tileSize;
	var m_context3 = this.m_canvas3.getContext("2d");
	
	this.m_canvas4 = document.createElement('canvas');
	this.m_canvas4.width = tileSize;
	this.m_canvas4.height = tileSize;
	var m_context4 = this.m_canvas4.getContext("2d");
	
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
	
	var img1 = new Image();
	img1.src = "../Images/tankUp.png";
	img1.onload = function()
   	{
   		m_context1.drawImage(img1,0,0,tileSize,tileSize);
   	}
	
	var img2 = new Image();
	img2.src = "../Images/tankDown.png";
	img2.onload = function()
   	{
   		m_context2.drawImage(img2,0,0,tileSize,tileSize);
   	}
	
	var img3 = new Image();
	img3.src = "../Images/tankLeft.png";
	img3.onload = function()
   	{
   		m_context3.drawImage(img3,0,0,tileSize,tileSize);
   	}
	
	var img4 = new Image();
	img4.src = "../Images/tankRight.png";
	img4.onload = function()
   	{
   		m_context4.drawImage(img4,0,0,tileSize,tileSize);
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
	this.movedThisRound = false;
	switch (this.direction){
		case 1:
		canvas.drawImage(this.m_canvas1,startx,startY);
		break;
		case 2:
		canvas.drawImage(this.m_canvas2,startx,startY);
		break;
		case 3:
		canvas.drawImage(this.m_canvas3,startx,startY);
		break;
		default:
		canvas.drawImage(this.m_canvas4,startx,startY);
	}
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
		this.direction = 1;
		this.board.moveTo(this.x,this.y,this.x,this.y-1);
		this.y = this.y - 1;
	}
}

/**
 * Move the tank's position down one tile if possible.
 */
Tank.prototype.moveDown = function(){
	if (this.board.canBePlaced(this.x, this.y+1)){
		this.direction = 2;
		this.board.moveTo(this.x,this.y,this.x,this.y+1);
		this.y = this.y + 1;
	}
}

/**
 * Move the tank's position up left tile if possible.
 */
Tank.prototype.moveLeft = function(){
	if (this.board.canBePlaced(this.x-1, this.y)){
		this.direction = 3;
		this.board.moveTo(this.x,this.y,this.x-1,this.y);
		this.x = this.x - 1;
	}
}

/**
 * Move the tank's position right one tile if possible.
 */
Tank.prototype.moveRight = function(){
	if (this.board.canBePlaced(this.x+1, this.y)){
		this.direction = 4;
		this.board.moveTo(this.x,this.y,this.x+1,this.y);
		this.x = this.x + 1;
	}
}
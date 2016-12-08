/*
Author: Viren Patel

The tank object used in the game.
Different images representing different states of the tank.

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
 * @param {number} direction - the direction the tank is facing.
 * @param {number} type - the type of tank: player or bot.
 */
var Tank = function (tileSize, x, y, gameBoard, direction, type){
	this.movedThisRound = 0; //boolean to ensure that tank only moves once per frame 
	this.board = gameBoard;
	this.x = x;
	this.y = y;
	this.health = 100;
	this.direction = 1; // 1=up, 2= down, 3=left, 4=right
	this.type = type; //1=player, 2=bot

	//Background
	this.m_canvasBG = document.createElement('canvas');
	this.m_canvasBG.width = tileSize;
	this.m_canvasBG.height = tileSize;
	this.m_contextBG = this.m_canvasBG.getContext("2d");
	this.m_contextBG.fillStyle = "#458B00";
	this.m_contextBG.fillRect(0,0,tileSize,tileSize);
	this.m_contextBG.fillStyle = "#000000";
	this.m_contextBG.rect(0,0,tileSize,tileSize);
	this.m_contextBG.stroke();
	
	this.m_canvas1 = document.createElement('canvas');
	this.m_canvas1.width = tileSize;
	this.m_canvas1.height = tileSize;
	var m_context1 = this.m_canvas1.getContext("2d");
	m_context1.drawImage(this.m_canvasBG,0,0,tileSize,tileSize);
	
	this.m_canvas2 = document.createElement('canvas');
	this.m_canvas2.width = tileSize;
	this.m_canvas2.height = tileSize;
	var m_context2 = this.m_canvas2.getContext("2d");
	m_context2.drawImage(this.m_canvasBG,0,0,tileSize,tileSize);
	
	this.m_canvas3 = document.createElement('canvas');
	this.m_canvas3.width = tileSize;
	this.m_canvas3.height = tileSize;
	var m_context3 = this.m_canvas3.getContext("2d");
	m_context3.drawImage(this.m_canvasBG,0,0,tileSize,tileSize);
	
	this.m_canvas4 = document.createElement('canvas');
	this.m_canvas4.width = tileSize;
	this.m_canvas4.height = tileSize;
	var m_context4 = this.m_canvas4.getContext("2d");
	m_context4.drawImage(this.m_canvasBG,0,0,tileSize,tileSize);
	
	this.m_canvas11 = document.createElement('canvas');
	this.m_canvas11.width = tileSize;
	this.m_canvas11.height = tileSize;
	var m_context11 = this.m_canvas11.getContext("2d");
	m_context11.drawImage(this.m_canvasBG,0,0,tileSize,tileSize);
	
	this.m_canvas22 = document.createElement('canvas');
	this.m_canvas22.width = tileSize;
	this.m_canvas22.height = tileSize;
	var m_context22 = this.m_canvas22.getContext("2d");
	m_context22.drawImage(this.m_canvasBG,0,0,tileSize,tileSize);
	
	this.m_canvas33 = document.createElement('canvas');
	this.m_canvas33.width = tileSize;
	this.m_canvas33.height = tileSize;
	var m_context33 = this.m_canvas33.getContext("2d");
	m_context33.drawImage(this.m_canvasBG,0,0,tileSize,tileSize);
	
	this.m_canvas44 = document.createElement('canvas');
	this.m_canvas44.width = tileSize;
	this.m_canvas44.height = tileSize;
	var m_context44 = this.m_canvas44.getContext("2d");
	m_context44.drawImage(this.m_canvasBG,0,0,tileSize,tileSize);
	
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
	
	var img11 = new Image();
	img11.src = "../Images/tankDmgUp.png";
	img11.onload = function()
   	{
   		m_context11.drawImage(img11,0,0,tileSize,tileSize);
   	}
	
	var img22 = new Image();
	img22.src = "../Images/tankDmgDown.png";
	img22.onload = function()
   	{
   		m_context22.drawImage(img22,0,0,tileSize,tileSize);
   	}
	
	var img33 = new Image();
	img33.src = "../Images/tankDmgLeft.png";
	img33.onload = function()
   	{
   		m_context33.drawImage(img33,0,0,tileSize,tileSize);
   	}
	
	var img44 = new Image();
	img44.src = "../Images/tankDmgRight.png";
	img44.onload = function()
   	{
   		m_context44.drawImage(img44,0,0,tileSize,tileSize);
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
	this.movedThisRound  --;
	switch (this.type){
		case 1:
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
		break;
		default:
		switch (this.direction){
			case 1:
			canvas.drawImage(this.m_canvas11,startx,startY);
			break;
			case 2:
			canvas.drawImage(this.m_canvas22,startx,startY);
			break;
			case 3:
			canvas.drawImage(this.m_canvas33,startx,startY);
			break;
			default:
			canvas.drawImage(this.m_canvas44,startx,startY);
		}
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
 * Give the tank's health.
 * @return {number} - The tank's health.
 */
Tank.prototype.getHealth = function (){
	return this.health;
}

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
	this.direction = 1;
	if (this.board.canBePlaced(this.x, this.y-1)){
		this.board.moveTo(this.x,this.y,this.x,this.y-1);
		this.y = this.y - 1;
	}
}

/**
 * Move the tank's position down one tile if possible.
 */
Tank.prototype.moveDown = function(){
	this.direction = 2;
	if (this.board.canBePlaced(this.x, this.y+1)){		
		this.board.moveTo(this.x,this.y,this.x,this.y+1);
		this.y = this.y + 1;
	}
}

/**
 * Move the tank's position up left tile if possible.
 */
Tank.prototype.moveLeft = function(){
	this.direction = 3;
	if (this.board.canBePlaced(this.x-1, this.y)){		
		this.board.moveTo(this.x,this.y,this.x-1,this.y);
		this.x = this.x - 1;
	}
}

/**
 * Move the tank's position right one tile if possible.
 */
Tank.prototype.moveRight = function(){
	this.direction = 4;
	if (this.board.canBePlaced(this.x+1, this.y)){		
		this.board.moveTo(this.x,this.y,this.x+1,this.y);
		this.x = this.x + 1;
	}
}
/** Creates an object called wall as a barrier on the game board.
 *
 * @constructor
 * @this {wall}
 * @param {number} tileSize The size of one tile in a grid.
 */
var wall=function(tileSize){
	this.strength=25;
	this.x = tileSize*5;
	this.y = tileSize*5;
	this.m_canvas = document.createElement('canvas');
	this.m_canvas.width = tileSize;
	this.m_canvas.height = tileSize;
	var m_context = this.m_canvas.getContext("2d");
	var img = new Image();
	img.src = "../Images/wall.png";
	img.onload = function()
   	{
   		m_context.drawImage(img,0,0,tileSize,tileSize);
   	}
}
/**
 * Returns the type of the wall.
 *
 * @this {wall}
 * @return {string} The type of wall.
 */
wall.prototype.type = function(){
	return "BARRIER";
}
/**
 * Puts the image of the wall on the expected position game board.
 *
 * @this {wall}
 * @param {canvas} canvas The graphic object to draw on.
 * @param {number} startx The position of the object on the x-axis on the game board.
 * @param {number} startY The position of the object on the y-axis on the game board.
 * @param {number} tileSize The size of one tile in a grid.
 */
wall.prototype.draw = function(canvas,startx,startY,tileSize){
	canvas.drawImage(this.m_canvas,startx,startY);
}
/**
 * Decreases the points of strength of the wall after being hit.
 
 * @param {number} hitStength The points of strength of the object will decrease after being hit.
 * @this {wall}
 */
wall.prototype.hit = function (hitStength){
	this.strength-=hitStength;
}
/**
 * Returns the remainning points of strength of the wall.
 *
 * @this {wall}
 * @param {number} hitStength The points of strength of the object will decrease after being hit.
 * @return {number} The remainning points of strength of the wall.
 */
wall.prototype.getHealth = function (hitStength){
	return this.strength;
}
/**
 * Returns positions of the wall on the x-axis and the y-axis on the game board.
 *
 * @this {wall}
 * @return {number} x The positon of the wall on the x-axis of the game board.
 * @return {number} y The positon of the wall on the y-axis of the game board.
 */
wall.prototype.getPosition = function (){
	return this.x, this.y;
}





/** Creates an object called steel as a barrier on the game board.
 *
 * @constructor
 * @this {steel}
 * @param {number} tileSize The size of one tile in a grid
 */
var steel=function(tileSize){
	this.strength=75;
	this.x = tileSize*5;
	this.y = tileSize*5;
	this.m_canvas = document.createElement('canvas');
	this.m_canvas.width = tileSize;
	this.m_canvas.height = tileSize;
	var m_context = this.m_canvas.getContext("2d");
	var img = new Image();
	img.src = "../Images/steel.png";
	img.onload = function()
   	{
   		m_context.drawImage(img,0,0,tileSize,tileSize);
   	}
}
/**
 * Returns the type of the steel.
 *
 * @this {steel}
 * @return {string} The type of the steel.
 */
steel.prototype.type = function(){
	return "BARRIER";
}
/**
 * Puts the image of the steel on the expected position game board.
 *
 * @this {steel}
 * @param {canvas} canvas The graphic object to draw on.
 * @param {number} startx The position of the object on the x-axis on the game board.
 * @param {number} startY The position of the object on the y-axis on the game board.
 * @param {number} tileSize The size of one tile in a grid.
 */
steel.prototype.draw = function(canvas,startx,startY,tileSize){
	canvas.drawImage(this.m_canvas,startx,startY);
}
/**
 * Decreases the points of strength of the steel after being hit
 *
 * @this {steel}
 * @param {number} hitStength The points of strength of the object will decrease after being hit.
 */
steel.prototype.hit = function (hitStength){
	this.strength-=hitStength;
}
/**
 * Returns the remainning points of strength of the steel.
 *
 * @this {steel}
 * @param {number} hitStength The points of strength of the object will decrease after being hit.
 * @return {number} The remainning points of strength of the steel.
 */
steel.prototype.getHealth = function (hitStength){
	return this.strength;
}
/**
 * Returns positions of the steel on the x-axis and the y-axis on the game board.
 *
 * @return {number} x The positon of the steel on the x-axis of the game board.
 * @return {number} y The positon of the steel on the y-axis of the game board.
 */
steel.prototype.getPosition = function (){
	return this.x, this.y;
}





/** Creates an object called home base on the game board.
 *
 * @constructor
 * @this {homeBase}
 * @param {number} tileSize The size of one tile in a grid
 */
var homeBase=function(tileSize,gameBoard){
	this.board = gameBoard;
	this.strength=200;
	this.x = tileSize*5;
	this.y = tileSize*5;
	this.m_canvas = document.createElement('canvas');
	this.m_canvas.width = tileSize;
	this.m_canvas.height = tileSize;
	var m_context = this.m_canvas.getContext("2d");
	var img = new Image();
	img.src = "../Images/homebase.png";
	img.onload = function()
   	{
   		m_context.drawImage(img,0,0,tileSize,tileSize);
   	}
}
/**
 * Returns the type of the home base.
 *
 * @this {homeBase}
 * @return {string} The type of the home base.
 */
homeBase.prototype.type = function(){
	return "HOMEBASE";
}
/**
 * Puts the image of the home base on the expected position game board.
 *
 * @this {homeBase}
 * @param {canvas} canvas The graphic object to draw on.
 * @param {number} startx The position of the object on the x-axis on the game board.
 * @param {number} startY The position of the object on the y-axis on the game board.
 * @param {number} tileSize The size of one tile in a grid.
 */
homeBase.prototype.draw = function(canvas,startx,startY,tileSize){
	canvas.drawImage(this.m_canvas,startx,startY);
}
/**
 * Decreases the points of strength of the home base after being hit
 *
 * @this {homeBase}
 * @param {number} hitStength The points of strength of the object will decrease after being hit.
 */
homeBase.prototype.hit = function (hitStength){
	this.strength-=hitStength;
	this.board.updateBase(this.strength);
	if (this.strength <= 0 ){
		endGame("BASE DESTROYED","YOU LOSE");
	}
}
/**
 * Returns the remainning points of strength of the home base.
 *
 * @this {homeBase}
 * @param {number} hitStength The points of strength of the object will decrease after being hit.
 * @return {number} The remainning points of strength of the home base.
 */
homeBase.prototype.getHealth = function (hitStength){
	return this.strength;
}
/**
 * Returns positions of the home base on the x-axis and the y-axis on the game board.
 *
 * @this {homeBase}
 * @return {number} x The positon of the home base on the x-axis of the game board.
 * @return {number} y The positon of the home base on the y-axis of the game board.
 */
homeBase.prototype.getPosition = function (){
	return this.x, this.y;
}
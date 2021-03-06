/*
* Author: Pavithran Pathmarajah
*
* Square objet to replace previously coded, Directional input, bound checking 
* and drawing
*/

//Create Object setting right side to function allows for a default contructor. 
// If no constructor wanted just re-write object name
var SquareObj = function (colour, xPos, yPos, dimens){
	this.colour = colour;
	this.xPos = xPos;
	this.yPos = yPos;
	this.dimens = dimens;
}

// object methods, declared with object name followed by prototype, then method 
// name. right side of which is an object. A value can be sued to set value.
SquareObj.prototype.arrUp = function(){
	this.yPos-=size*0.5
} 

SquareObj.prototype.arrDown = function(){
	this.yPos+=size*0.5
} 

SquareObj.prototype.arrLeft = function(){
	this.xPos-=size*0.5
} 

SquareObj.prototype.arrRight = function(){
	this.xPos+=size*0.5
} 

SquareObj.prototype.checkBounds = function (heightOfSpace, widthOfSpace){
	if(this.xPos<0)
   		this.xPos = 0;
   	else if (this.xPos>(widthOfSpace-this.dimens))
   		this.xPos = widthOfSpace-size;
   	else if (this.yPos<0)
   		this.yPos = 0;
   	else if (this.yPos>(heightOfSpace-this.dimens))
   		this.yPos = heightOfSpace-size;
}

SquareObj.prototype.paint = function(canvas){
	canvas.fillStyle = this.colour;
	canvas.fillRect(this.xPos,this.yPos,this.dimens,this.dimens);
}
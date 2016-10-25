/*
Author: Viren Patel


*/

// Tank constructor and definition
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

// method to draw the tank image - called by GameBoard
Tank.prototype.draw = function(canvas,startx,startY,tileSize){
	canvas.drawImage(this.m_canvas,startx,startY);
}

// function to determine if the tank will take damage or not
Tank.prototype.damage = function(x, y){
	
}

// function to update the tank's attributes
Tank.prototype.update = function(){
	this.updatePos();
	this.updateImage();
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




	
    
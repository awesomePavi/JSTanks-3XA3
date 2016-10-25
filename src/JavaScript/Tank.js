/*
Author: Viren Patel


*/

// Tank constructor and definition
var Tank = function (tileSize){
	this.x = tilesize*5;
	this.y = tilesize*5;
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

//
Tank.prototype.type = function(){
	return "BLANK";
}

Tank.prototype.hit = function (hitStength){
	this.health -= hitStrength;
}

Tank.prototype.getHealth = function (){
	return this.health;
}

Tank.prototype.getPosition = function (){
	return this.x, this.y;
}




	
    
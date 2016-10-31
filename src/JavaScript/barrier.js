//Wall
var wall=function(tileSize){
	this.strength=1;
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
wall.prototype.type = function(){
	return "BARRIER";
}
wall.prototype.draw = function(canvas,startx,startY,tileSize){
	canvas.drawImage(this.m_canvas,startx,startY);
}
wall.prototype.hit = function (hitStength){
	this.strength--;
}
wall.prototype.getHealth = function (hitStength){
	return this.strength;
}
wall.prototype.getPosition = function (){
	return this.x, this.y;
}

//Steel
var steel=function(tileSize){
	this.strength=3;
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
steel.prototype.type = function(){
	return "BARRIER";
}
steel.prototype.draw = function(canvas,startx,startY,tileSize){
	canvas.drawImage(this.m_canvas,startx,startY);
}
steel.prototype.hit = function (hitStength){
	this.strength--;
}
steel.prototype.getHealth = function (hitStength){
	return this.strength;
}
steel.prototype.getPosition = function (){
	return this.x, this.y;
}

//Home Base
var homeBase=function(tileSize){
	this.strength=5;
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
homeBase.prototype.type = function(){
	return "HOMEBASE";
}
homeBase.prototype.draw = function(canvas,startx,startY,tileSize){
	canvas.drawImage(this.m_canvas,startx,startY);
}
homeBase.prototype.hit = function (hitStength){
	this.strength--;
}
homeBase.prototype.getHealth = function (hitStength){
	return this.strength;
}
homeBase.prototype.getPosition = function (){
	return this.x, this.y;
}

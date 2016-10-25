//Wall
var wall=function(){
	this.strength=1;
}
wall.prototype.type = function(){
	return "BARRIER";
}
wall.prototype.draw = function(canvas,startx,startY,tileSize,t){
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
var steel=function(){
	this.strength=3;
}
steel.prototype.type = function(){
	return "BARRIER";
}
steel.prototype.draw = function(canvas,startx,startY,tileSize,t){
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
var HomeBase=function(){
	this.strength=5;
}
HomeBase.prototype.type = function(){
	return "HOMEBASE";
}
HomeBase.prototype.draw = function(canvas,startx,startY,tileSize,t){
	canvas.drawImage(this.m_canvas,startx,startY);
}
HomeBase.prototype.hit = function (hitStength){
	this.strength--;
}
HomeBase.prototype.getHealth = function (hitStength){
	return this.strength;
}
HomeBase.prototype.getPosition = function (){
	return this.x, this.y;
}

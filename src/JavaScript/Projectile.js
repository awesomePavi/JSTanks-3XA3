
/**
 * Represents a Projectile.
 * @constructor
 * @param {number} tileSize - the size of any one tile on the gameboard.
 * @param {number} x - the x position of the projectile.
 * @param {number} y - the y position of the projectile.
 * @param {number} dir - the direction that the projectile is to travel.
 */
var Projectile = function(tileSize,x,y,dir){
	this.m_canvas = document.createElement('canvas');
	this.m_canvas.width = tileSize;
	this.m_canvas.height = tileSize;
	var m_context = this.m_canvas.getContext("2d");
	m_context.fillStyle = "#FF0000";

	this.startTilex = x;
	this.startTiley = y;
	this.startx = x*tileSize;
	this.startY = y*tileSize; 
	this.direction = dir;
	this.shiftx = 0; 
	this.shifty = 0;
	this.tileSize = tileSize;
	this.speed = tileSize/3;

	switch(this.direction) {
		case 1:
		m_context.fillRect(tileSize-(tileSize/4),tileSize/2-(tileSize/16)
			,tileSize/4,tileSize/8);
		this.shiftx += tileSize/16;
		break;
		case 2:
		m_context.fillRect(0,tileSize/2-(tileSize/16),tileSize/4,tileSize/8);
		this.shiftx -= tileSize/16;
		break;
		case 3:
		m_context.fillRect(tileSize/2-(tileSize/16),tileSize-(tileSize/4)
			,tileSize/8,tileSize/4);
		this.shifty += tileSize/16;
		break;
		default:
		m_context.fillRect(tileSize/2-(tileSize/16),0,tileSize/8,tileSize/4);
		this.shifty -= tileSize/16;
		break;
	}
}

/**
 * Update projectile movement and if it has hit any other object or not.
 * @param {board} board - A board object.
 */
Projectile.prototype.update = function(board){
	posx = Math.floor((this.startx+this.shiftx)/this.tileSize);
	posy = Math.floor((this.startY+this.shifty)/this.tileSize);
	switch(this.direction) {
		case 1:
		this.shiftx+=this.speed//this.tileSize/4;
		posy = this.startTiley;
		posx++;
		break;
		case 2:
		this.shiftx-=this.speed//this.tileSize/4;
		posy = this.startTiley;
		break;
		case 3:
		this.shifty+=this.speed//this.tileSize/4;
		posx = this.startTilex;
		posy++;
		break;
		default:
		this.shifty-=this.speed//this.tileSize/4;
		posx = this.startTilex;
		break;
	}

	if(!board.canBePlaced(posx,posy))
	{
		board.damage(25,posx,posy);
		return true;
	}
	return false;
}

/**
 * Draw pre rendered inmage onto tile at location
 * @param {canvas} canvas - The canvas for the game board.
 */
Projectile.prototype.draw = function(canvas){
	canvas.drawImage(this.m_canvas,this.startx+this.shiftx
		,this.startY+this.shifty);


	//this.shiftx++;
}

/**
 * An empty queue for a projectile.
 */
var ProjectileQue = function(){
	this.queue = [];
}

/**
 * Increment the projectile queue. 
 * @param {number} x - the x position of the projectile.
 * @param {number} y - the y position of the projectile.
 * @param {number} tileSize - the size of any one tile on the gameboard.
 * @param {number} direction - the direction that the projectile is to travel.
 */
ProjectileQue.prototype.add = function (x,y,tileSize,direction){
	var tmp = new Projectile (tileSize, x,y,direction);
	this.queue.push(tmp)
}

/**
 * Update the prjectile queue.
 * @param {board} - A game board object.
 */
ProjectileQue.prototype.update = function (board){
	for (i=0; i<this.queue.length; i++){
		if (this.queue[i].update(board))
		{
			this.queue.splice(i, 1);
		}
	}
}

/**
 * Pre render teh projectile queue
 * @param {context} drawContext - the context for the projectile canvas.
 */
ProjectileQue.prototype.render = function (drawContext){
	for (i=0; i<this.queue.length; i++){
		this.queue[i].draw(drawContext);
	}
}


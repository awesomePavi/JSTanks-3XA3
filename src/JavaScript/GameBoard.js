/*
* Author: Pavithran Pathmarajah
*
* The 15*15 board used in the game, each tile is an entity of either Blank, 
* Tank, Wall or Base
*/

/*
* The baord classes handles the board graphcis and relative infromation
*
* int tileseize: The size that each of the tiels o nthe board should be
*/
var GameBoard = function(tileSize){
	this.tileSize = tileSize;
	this.height = tileSize*15;
	this.width = tileSize*15;
	//board is a 15*15 array
	this.board = new Array(15);

	for ( i =0; i < 15; i++){
		this.board[i] = new Array (15);
	}

	//Filling board with empty tiles
	for ( y =0; y < 15; y++){
		for (x = 0; x < 15; x++){
			this.board[y][x] = new EmptyTile(this.tileSize);//this.randomTile();// new EmptyTile(this.tileSize);
		}
	}

	//Handle Projectiles
	this.projectileQueue = new ProjectileQue();

	
	//Building virtual canvas for board to be prerendered on
	this.boardCanvas = document.createElement('canvas');
	this.boardCanvas.width = this.width;
	this.boardCanvas.height = this.height;
	this.boardContext = this.boardCanvas.getContext("2d");
}

GameBoard.prototype.fire = function(x,y,direction){
	this.projectileQueue.add(x,y,this.tileSize,direction);
}

GameBoard.prototype.damage = function(damageTaken,x,y){
	try{
		this.board[y][x].hit(damageTaken);
	}catch(e){
		console.log(e);
		console.log(y);
		console.log(x);
	}
}

GameBoard.prototype.update = function(){
	this.projectileQueue.update(this);
	for ( y =0; y < 15; y++){
		for (x = 0; x < 15; x++){
			//tile location
			if (this.board[y][x].getHealth()<=0){
				this.board[y][x] =  new EmptyTile(this.tileSize);
			}
		}
	}
}


GameBoard.prototype.randomTile = function(){
	  var x = Math.floor((Math.random() * 5) + 1);
	  if (x == 1){
	  	return new Tank(this.tileSize);
	 } else if (x==2){
	 	return new wall(this.tileSize);
	 } else if (x==3){
	 	return new steel(this.tileSize);
	 } else if (x==4){
	 	return new homeBase(this.tileSize);
	 }
	 return new EmptyTile(this.tileSize);
}

//Method will be used to tell if there is an empty tile in said spot
GameBoard.prototype.canBePlaced = function(x,y){
	
	try{
		return this.board[y][x].empty;
	}catch(e){
		return false;
	}
}

//draw onto pre-rendered game baord and then onto actual screen
GameBoard.prototype.draw = function(){
	this.update();
	for ( y =0; y < 15; y++){
		for (x = 0; x < 15; x++){
			//tile location
			this.board[y][x].draw(this.boardContext,x*this.tileSize
				,y*this.tileSize,this.tileSize)
		}
	}
	this.projectileQueue.render(this.boardContext);
}

//get rendered image
GameBoard.prototype.getRender = function(){
	return this.boardCanvas;
}

//pre-render empty tile, so that it does not slow down the system
var EmptyTile = function(tileSize){
	this.m_canvas = document.createElement('canvas');
	this.m_canvas.width = tileSize;
	this.m_canvas.height = tileSize;
	this.m_context = this.m_canvas.getContext("2d");
	this.m_context.fillStyle = "#458B00";
	this.m_context.fillRect(0,0,tileSize,tileSize);
	this.m_context.fillStyle = "#000000";
	this.m_context.rect(0,0,tileSize,tileSize);
	this.m_context.stroke();
}

EmptyTile.prototype.empty = function(){
	return true;
}

// returns the tank's health
EmptyTile.prototype.getHealth = function (){
	return 1;
}

//draw pre rnedered image onto tile at location
EmptyTile.prototype.draw = function(canvas,startx,startY,tileSize){
	canvas.drawImage(this.m_canvas,startx,startY);
}
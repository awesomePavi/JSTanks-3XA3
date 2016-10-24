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
			this.board[y][x] = new EmptyTile(this.tileSize);
		}
	}

	//Building virtual canvas for board to be prerendered on
	this.boardCanvas = document.createElement('canvas');
	this.boardCanvas.width = this.width;
	this.boardCanvas.height = this.height;
	this.boardContext = this.boardCanvas.getContext("2d");
}

//Method will be used to tell if there is an empty tile in said spot
GameBoard.prototype.canBePlaced = function(x,y){
	
}

//draw onto pre-rendered game baord and then onto actual screen
GameBoard.prototype.draw = function(){
	for ( y =0; y < 15; y++){
		for (x = 0; x < 15; x++){
			//tile location
			this.board[y][x].draw(this.boardContext,x*this.tileSize
				,y*this.tileSize,this.tileSize)
		}
	}
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
	this.m_context.fillStyle = "458B00";
	this.m_context.fillRect(0,0,tileSize,tileSize);
	this.m_context.fillStyle = "000000";
	this.m_context.rect(0,0,tileSize,tileSize);
	this.m_context.stroke();
}

//draw pre rnedered image onto tile at location
EmptyTile.prototype.draw = function(canvas,startx,startY,tileSize){
	canvas.drawImage(this.m_canvas,startx,startY);
}
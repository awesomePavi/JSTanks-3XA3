/*
* Author: Pavithran Pathmarajah
*
* The 15*15 board used in the game, each tile is an entity of either Blank, 
* Tank, Wall or Base
*/

/**
* The board classes handles the board graphcis and relative infromation.
*
* @param {number} tileseize - The size that each of the tiles on the board should be.
* @param {number} level - The level of the AI.
* @param {number} map - The map number.
* @param {number} amountAI - The number of bots in the game.
*/
var GameBoard = function(tileSize,level,map, amountAI){
	this.tileSize = tileSize;
	this.height = tileSize*16;
	this.width = tileSize*15;
	this.player;
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


	this.AIWait = 5;

	if (level > 0 && level < 6){
		this.AIWait = 5 - level;
	}else{

	}

	this.AiMoves = this.AIWait;

	//map difficulty
	if (map == 1){
		new createBoard(this,"normal");
	}else{
		new createBoard(this,"difficult");
	}


	var notPlaced = true;
	while (notPlaced){
		var tmpx = Math.floor((Math.random() * 15) + 1);
		var tmpy = Math.floor((Math.random() * 3) + 1);
		if (this.canBePlaced( tmpx,15-tmpy )){
			notPlaced = false;
			this.player = new Player(this.tileSize,tmpx,15-tmpy,this, 1, 1);
			this.board[15-tmpy][tmpx] = this.player;
		}
	}
	this.player.hit(-50);
	this.playerBarLen =  (this.tileSize * 13);
	this.baseBarLen =  (this.tileSize * 13);
	this.curWeakBase = 200;

	for (i = 0; i < amountAI; i++){
		var notPlaced = true;
		while (notPlaced){
			var tmpx = Math.floor((Math.random() * 15) + 1);
			var tmpy = Math.floor((Math.random() * 7) + 1);
			if (this.canBePlaced( tmpx,tmpy )){
				this.board[tmpy][tmpx] = new Bot(this.tileSize,tmpx,tmpy,this, 1, 2);
				notPlaced = false;

			}
		}
	}
	//this.board[13][2] = new Bot(this.tileSize,2,13,this, 1);


	//Handle Projectiles
	this.projectileQueue = new ProjectileQue();
	
	//Building virtual canvas for board to be prerendered on
	this.boardCanvas = document.createElement('canvas');
	this.boardCanvas.width = this.width;
	this.boardCanvas.height = this.height;
	this.boardContext = this.boardCanvas.getContext("2d");


	//canvasReDraw
	this.ReDrawCanvas = document.createElement('canvas');
	this.ReDrawCanvas.width = this.width;
	this.ReDrawCanvas.height = this.height;
	this.ReDrawContext = this.boardCanvas.getContext("2d");
	this.ReDrawContext.fillStyle = "#FFFFFF";
	this.ReDrawContext.fillRect(0,0,this.width,this.height);

}
/** 
 * Detect that the player has pressed a movement key and call the movement function.
 * @param {event} A keyboard event.
 */
GameBoard.prototype.playerMove = function(event){
	this.player.interface(event);
}

/**
 * Construct and launch a projectile.
 * @param {number} x - the x position of the tank.
 * @param {number} y - the y position of the tank.
 * @param {number} direction - the direction the tank is facing.
 */
GameBoard.prototype.fire = function(x,y,direction){
	this.projectileQueue.add(x,y,this.tileSize,direction);
}

/**
 * Update the health of the home base.
 * @param {number} baseStrength - the current health of the home base.
 */
GameBoard.prototype.updateBase = function(baseStrength){
	if (this.curWeakBase > baseStrength){
		this.curWeakBase = baseStrength
	}
	this.baseBarLen = (this.curWeakBase/200) * (this.tileSize * 13);
}

/**
 * Update player's health when hit with a projectile.
 * @param {number} damageTaken: the damage taken by the tank.
 * @param {number} x - the x position of the tank.
 * @param {number} y - the y position of the tank.
 */
GameBoard.prototype.damage = function(damageTaken,x,y){
	try{
		this.board[y][x].hit(damageTaken);

		this.playerBarLen = (this.player.getHealth()/150) * (this.tileSize * 13);
	}catch(e){
		//console.log(e);
		//console.log(y);
		//console.log(x);
	}
}

/**
 * Return a random type of object: Tank, Wall, steel, homeBase or EmptyTile.
 * @return {Tank} A tank object.
 * @return {Wall} A brick wall object.
 * @return {steel} A steel wall object.
 * @return {homeBase} A home base object.
 * @return {EmptyTile} An empty tile object.
 */
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

/**
 * Determine if there is an empty tile in the said spot.
 * @param {number} x - the x position of the said spot.
 * @param {number} y - the y position of the said spot.
 * @return {boolean} True or False indicating an empty tile.
 */
GameBoard.prototype.canBePlaced = function(x,y){
	
	try{
		return this.board[y][x].empty;
	}catch(e){
		return false;
	}
}

/**
 * Move the position of a tank to a new tile on the game board.
 * @param {number} Oldx - the current x position of the tank.
 * @param {number} Oldy - the current y position of the tank.
 * @param {number} newX - the new x position of the tank.
 * @param {number} newY - the new y position of the tank.
 */
GameBoard.prototype.moveTo = function(Oldx,Oldy,newX,newY){
	this.board[newY][newX] = this.board[Oldy][Oldx];
	this.board[Oldy][Oldx] = new EmptyTile(this.tileSize);
}

/**
 * Update the state of the game board.
 */
GameBoard.prototype.update = function(){

	for ( y =0; y < 15; y++){
		for (x = 0; x < 15; x++){
			//tile location
			if (this.board[y][x].getHealth()<=0){
				this.board[y][x] =  new EmptyTile(this.tileSize);
			}
		}
	}
	if (this.AiMoves <= 0 ){
		this.AiMoves = this.AIWait ;
	for ( y =0; y < 15; y++){
		for (x = 0; x < 15; x++){
			//tile location
			try{
			if (this.board[y][x].Flag){
				this.board[y][x].movementLogic(this.player,x,y);
			}
		}catch(e){}
		
		}
	}

	}
	this.AiMoves --;
}

/**
 * Draw onto pre-rendered game baord and then onto actual screen.
 *
 */
GameBoard.prototype.draw = function(){
		this.ReDrawContext.fillStyle = "#FFFFFF";
	this.ReDrawContext.fillRect(0,0,this.width,this.height);
	this.boardContext.drawImage(this.ReDrawCanvas,0,0);

	//projectiles move faster then palyers
	this.projectileQueue.update(this);

	for ( y =0; y < 15; y++){
		for (x = 0; x < 15; x++){
			this.board[y][x].draw(this.boardContext,x*this.tileSize
				,y*this.tileSize,this.tileSize);
		}
	}
	this.projectileQueue.render(this.boardContext);


	posBarsHealthY =  this.height-(this.tileSize*.75);
	posBarsHealthThicknes = this.tileSize*0.8;
	posBarsHealthLength = this.tileSize * 5;

	this.boardContext.fillStyle = "#00FF00";
	if (this.playerBarLen < this.tileSize * 5){
		this.boardContext.fillStyle = "#FF0000";
	}else if (this.playerBarLen < this.tileSize * 10){
		this.boardContext.fillStyle = "#FF9200";
	}
	this.boardContext.fillRect(2*this.tileSize,posBarsHealthY,this.playerBarLen,this.tileSize/4);
	
	this.boardContext.fillStyle = "#00FF00";
	if (this.baseBarLen < this.tileSize * 4){
		this.boardContext.fillStyle = "#FF0000";
	}else if (this.baseBarLen < this.tileSize * 10){
		this.boardContext.fillStyle = "#FF9200";
	}
	this.boardContext.fillRect(2*this.tileSize ,posBarsHealthY+(posBarsHealthThicknes/4)+(this.tileSize/4),this.baseBarLen,this.tileSize/4);
	this.boardContext.fillStyle = "#000000";

	this.boardContext.font= (0.02*this.width)+"px Georgia";
	this.boardContext.fillText("Player",0,posBarsHealthY+(posBarsHealthThicknes/4),2*this.tileSize);
	this.boardContext.fillText("Base",0,posBarsHealthY+(posBarsHealthThicknes/2)+(this.tileSize/4),2*this.tileSize);
}

/**
 * Get rendered image.
 * @return {canvas} The board canvas.
 */
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

/**
 * A function indicating that the tile is empty.
 * @return {boolean} Always true.
 */
EmptyTile.prototype.empty = function(){
	return true;
}

/**
 * Returns the tank's health.
 * @return {number} The tank's health.
 */
EmptyTile.prototype.getHealth = function (){
	return 1;
}

/**
 * Draw prerendered image onto tile at location.
 */
EmptyTile.prototype.draw = function(canvas,startx,startY,tileSize){
	canvas.drawImage(this.m_canvas,startx,startY);
}
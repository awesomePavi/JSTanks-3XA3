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
* int level: The level of the AI
* int map: The map number
*
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
GameBoard.prototype.playerMove = function(event){
	this.player.interface(event);
}

GameBoard.prototype.fire = function(x,y,direction){
	this.projectileQueue.add(x,y,this.tileSize,direction);
}

GameBoard.prototype.updateBase = function(baseStrength){
	if (this.curWeakBase > baseStrength){
		this.curWeakBase = baseStrength
	}
	this.baseBarLen = (this.curWeakBase/200) * (this.tileSize * 13);
}

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

GameBoard.prototype.moveTo = function(Oldx,Oldy,newX,newY){
	this.board[newY][newX] = this.board[Oldy][Oldx];
	this.board[Oldy][Oldx] = new EmptyTile(this.tileSize);
}

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

//draw onto pre-rendered game baord and then onto actual screen
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
var createBoard = function(gameBoard,style){
	if (style == "normal"){
		this.normal(gameBoard)
	}else{
		this.difficult(gameBoard)
	}
}

createBoard.prototype.normal = function(gameBoard){
	for ( y =7; y < 12; y=y+4){
		for ( x =5; x < 10; x++){
			gameBoard.board[y][x]= new wall(gameBoard.tileSize);
		}
	}
	
	for ( y =1; y < 10; y=y+8){
		for ( x =1; x < 6; x++){
			gameBoard.board[y][x]= new wall(gameBoard.tileSize);
		}
	}
	for ( y =1; y < 10; y=y+8){
		for ( x =9; x < 14; x++){
			gameBoard.board[y][x]= new wall(gameBoard.tileSize);
		}
	}
	for ( x =9; x < 14; x++){
		gameBoard.board[5][x]= new steel(gameBoard.tileSize);
	}
	for ( x =1; x < 6; x++){
		gameBoard.board[5][x]= new steel(gameBoard.tileSize);
	}
	for ( x =5; x < 10; x++){
		gameBoard.board[3][x]= new steel(gameBoard.tileSize);
	}
	for ( x =4; x < 11; x=x+6){
		for ( y =12; y < 15; y++){
			gameBoard.board[y][x]= new wall(gameBoard.tileSize);
		}
	}
	gameBoard.board[11][4]= new steel(gameBoard.tileSize);
	gameBoard.board[11][10]= new steel(gameBoard.tileSize);
	gameBoard.board[13][6]= new steel(gameBoard.tileSize);
	gameBoard.board[13][8]= new steel(gameBoard.tileSize);
	gameBoard.board[14][6]= new wall(gameBoard.tileSize);
	gameBoard.board[14][8]= new wall(gameBoard.tileSize);
	gameBoard.board[13][7]= new wall(gameBoard.tileSize);
	gameBoard.board[14][7]= new homeBase(gameBoard.tileSize);

	
}

createBoard.prototype.difficult = function(gameBoard){

	for ( y =0; y < 7; y++){
		gameBoard.board[y][7]= new wall(gameBoard.tileSize);
	}
	for ( y =8; y < 15; y++){
		gameBoard.board[y][7]= new wall(gameBoard.tileSize);
	}
	for ( x =2; x < 7; x++){
		gameBoard.board[7][x]= new wall(gameBoard.tileSize);
	}
	for ( x =8; x < 13; x++){
		gameBoard.board[7][x]= new wall(gameBoard.tileSize);
	}

	for ( x =8; x < 14; x++){
		gameBoard.board[3][x]= new steel(gameBoard.tileSize);
	}
	for ( x =1; x < 7; x++){
		gameBoard.board[3][x]= new steel(gameBoard.tileSize);
	}

	gameBoard.board[13][6]= new steel(gameBoard.tileSize);
	gameBoard.board[13][8]= new steel(gameBoard.tileSize);
	gameBoard.board[14][6]= new wall(gameBoard.tileSize);
	gameBoard.board[14][8]= new wall(gameBoard.tileSize);
	gameBoard.board[13][7]= new wall(gameBoard.tileSize);
	gameBoard.board[14][7]= new homeBase(gameBoard.tileSize);

	gameBoard.board[6][1]= new steel(gameBoard.tileSize);
	gameBoard.board[8][1]= new steel(gameBoard.tileSize);
	gameBoard.board[6][0]= new wall(gameBoard.tileSize);
	gameBoard.board[8][0]= new wall(gameBoard.tileSize);
	gameBoard.board[7][1]= new wall(gameBoard.tileSize);
	gameBoard.board[7][0]= new homeBase(gameBoard.tileSize);

	gameBoard.board[6][13]= new steel(gameBoard.tileSize);
	gameBoard.board[8][13]= new steel(gameBoard.tileSize);
	gameBoard.board[6][14]= new wall(gameBoard.tileSize);
	gameBoard.board[8][14]= new wall(gameBoard.tileSize);
	gameBoard.board[7][13]= new wall(gameBoard.tileSize);
	gameBoard.board[7][14]= new homeBase(gameBoard.tileSize);

	gameBoard.board[7][7]= new homeBase(gameBoard.tileSize);
	gameBoard.board[11][3]= new homeBase(gameBoard.tileSize);
	gameBoard.board[11][11]= new homeBase(gameBoard.tileSize);
}
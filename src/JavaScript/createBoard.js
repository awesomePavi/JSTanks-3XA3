var style = func

var createBoard = function(board,style){
	if (style = "normal"){
		this.normal(board)
	}else{
		this.difficult(board)
	}
}

createBoard.prototype.normal = fucntion(board){
	for ( y =7; y < 12; y=y+4){
		for ( x =5; x < 10; x++){
			board[y][x]= new wall(board.tileSize);
		}
	}
	for ( y =1; y < 10; y=y+8){
		for ( x =1; x < 6; x++){
			board[y][x]= new wall(board.tileSize);
		}
	}
	for ( y =1; y < 10; y=y+8){
		for ( x =9; x < 14; x++){
			board[y][x]= new wall(board.tileSize);
		}
	}
	for ( x =9; x < 14; x++){
		board[5][x]= new wall(board.tileSize);
	}
	for ( x =1; x < 6; x++){
		board[5][x]= new wall(board.tileSize);
	}
	for ( x =5; x < 10; x++){
		board[3][x]= new wall(board.tileSize);
	}
	for ( x =4; x < 11; x=x+6){
		for ( y =12; y < 15; y++){
			board[y][x]= new wall(board.tileSize);
		}
	}
	board[11][4]= new steel(board.tileSize);
	board[11][10]= new steel(board.tileSize);
	board[13][6]= new steel(board.tileSize);
	board[13][8]= new steel(board.tileSize);
	board[14][6]= new wall(board.tileSize);
	board[14][8]= new wall(board.tileSize);
	board[13][7]= new wall(board.tileSize);
	board[14][7]= new homeBase(board.tileSize);

	
}

createBoard.prototype.difficult = fucntion(board){
	for ( y =0; y < 13; y=y+3){
		for ( x =0; x < 15; x++){
			board[y][x]= 
		}
	}
	for ( y =0; y < 7; y++){
		board[y][7]= new wall(board.tileSize);
	}
	for ( y =8; y < 15; y++){
		board[y][7]= new wall(board.tileSize);
	}
	for ( x =2; x < 7; x++){
		board[7][x]= new wall(board.tileSize);
	}
	for ( x =8; x < 13; x++){
		board[7][x]= new wall(board.tileSize);
	}

	for ( x =8; x < 13; x++){
		board[3][x]= new wall(board.tileSize);
	}
	for ( x =9; x < 14; x++){
		board[3][x]= new wall(board.tileSize);
	}

	board[13][6]= new steel(board.tileSize);
	board[13][8]= new steel(board.tileSize);
	board[14][6]= new wall(board.tileSize);
	board[14][8]= new wall(board.tileSize);
	board[13][7]= new wall(board.tileSize);
	board[14][7]= new homeBase(board.tileSize);

	board[6][1]= new steel(board.tileSize);
	board[8][1]= new steel(board.tileSize);
	board[6][0]= new wall(board.tileSize);
	board[8][0]= new wall(board.tileSize);
	board[7][1]= new wall(board.tileSize);
	board[7][0]= new homeBase(board.tileSize);

	board[6][13]= new steel(board.tileSize);
	board[8][13]= new steel(board.tileSize);
	board[6][13]= new wall(board.tileSize);
	board[8][13]= new wall(board.tileSize);
	board[7][13]= new wall(board.tileSize);
	board[7][14]= new homeBase(board.tileSize);

	board[7][7]= new homeBase(board.tileSize);
	board[11][3]= new homeBase(board.tileSize);
	board[11][11]= new homeBase(board.tileSize);
}
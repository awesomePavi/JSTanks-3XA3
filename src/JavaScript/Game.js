/*
* Author: Pavithran Pathmarajah
*
* The JS Tanks Game, Currently only contains the setup and GameBaord with empty tile entities
*/

//size of cells, width and height of screen, html canvas, board offsets for centering
var size,width, height, gameCanvas, xOffSet, yOffSet;
//Objects used
var board;
//virtual canvas for pre-renders
var m_canvas, m_context;
//endGame Tracker;
var gameOver;
//gamestate

var numAI;

//retrive and setup Dimensions for canvas area and box to be used
function getSize(){
	//jquery gave most accurate window dimesnions
	width = $(window).width();
    height = $(window).height();
	//The board will be 15x15, with an offset from the top will be double that of 
	//the bottom to allow room for the health bar
	size = height /18;
	//board offsets
	xOffSet = (width-(size*15))/2
	yOffSet = size
}
//on AI die remove it
function deQueueAI(){
	numAI--;
	if (numAI<1){
		console.log("hi");
		endGame("ALL ENEMIES DESTROYED", "WINNER");
	}	
}

function endGame(message,winLoss){
	gameOver = true;
	paused = true;
	board.update();
	setTimeout(DrawCanvas, 100);
	console.log("GAMOVER LOSER");
	openGameOver(message,winLoss);
 
}

// for new Game
function getQueryVariable(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}

//set up game area
function setUpCanvas(){
	getSize();
	gameOver = false;
	level = getQueryVariable("Level");
	map = getQueryVariable("Map");
	if (!level){
		level = 1;
	}else{
		level = parseInt(level);
	}
	if (!map){
		map = 1;
	}else{
		map = parseInt(map);
	}

	numAI = 2;

	//create board objet with empty tiles
	board = new GameBoard(size,level,map,numAI);
	

	//set up html5 canvas for use
	tmp=document.getElementById("Game");
	tmp.width = width;
	tmp.height = height;
	//get drawable canvas for ajvascript to draw on
	gameCanvas= tmp.getContext("2d");

	//pre-render Canvas
	m_canvas = document.createElement('canvas');
	m_canvas.width = width;
	m_canvas.height = height;
	m_context = m_canvas.getContext("2d");

	//call the draw method 20 times per second
	Run=setInterval(function(){updateThenDraw();},200);
	paused = true;
	openPause(true);
}

window.onkeydown = function (e) {
    var code = e.keyCode ? e.keyCode : e.which;
    if (code === 80) { //up key
        if (paused){
        	closePause();
        }else{
     	   openPause();
    	}
    }
    board.playerMove(e);
};

function updateThenDraw(){
	if (!paused){
		board.update();
		setTimeout(DrawCanvas, 50);
		setTimeout(DrawCanvas, 100);
		setTimeout(DrawCanvas, 150);
		setTimeout(DrawCanvas, 200);
	}
}

function DrawCanvas(){
	//pre-render Board
	board.draw();
	//draw rendered board on rendered screen
	m_context.drawImage(board.getRender(), xOffSet,yOffSet);
	//draw screen
	gameCanvas.drawImage(m_canvas,0,0);
}

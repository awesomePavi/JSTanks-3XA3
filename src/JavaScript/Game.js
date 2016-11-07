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

//retrive and setup Dimensions for canvas area and box to be used
function getSize(){
	//jquery gave most accurate window dimesnions
	width = $(window).width();
    height = $(window).height();
	//The board will be 15x15, with an offset from the top and bottom equivalent to that
	size = height /17;
	//board offsets
	xOffSet = (width-(size*15))/2
	yOffSet = size
}

//set up game area
function setUpCanvas(){
	getSize()
	//create board objet with empty tiles
	board = new GameBoard(size);
	

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
	Run=setInterval(function(){DrawCanvas();},1000/5);
	paused = false;
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

function DrawCanvas(){
	if (!paused){
	//pre-render Board
	board.draw();
	//draw rendered board on rendered screen
	m_context.drawImage(board.getRender(), xOffSet,yOffSet);
	//draw screen
	gameCanvas.drawImage(m_canvas,0,0);
	}
}

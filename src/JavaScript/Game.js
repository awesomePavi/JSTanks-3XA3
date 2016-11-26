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

function endGame(winLoss){
	gameOver = true;
	paused = true;
	board.update();
	setTimeout(DrawCanvas, 100);
	console.log("GAMOVER LOSER");

	var modal1 = document.createElement( 'div' );
	modal1.className += "modal-container";
	modal1.style.display = "block";

	var modal2  = document.createElement( 'div' );
	modal2.className += "modal-wrapper";
	modal1.appendChild(modal2);

	var modal3  = document.createElement( 'div' );
	modal3.className += "modal-content";
	modal2.appendChild(modal3);

	var modal4  = document.createElement( 'header' );
	modal4.className += "modal-header";
	modal3.appendChild(modal4);

	var header = document.createElement( 'h2' )
	header.innerHTML = winLoss;
	modal4.appendChild(header);

	var modal5  = document.createElement( 'div' );
	modal5.className += "modal-body";
	modal3.appendChild(modal5);

	var article1 = document.createElement( 'h4' );
	article1.innerHTML = "Home";
	article1.style.textAlign = "center";
	article1.onclick = function() {home()};
	modal5.appendChild(article1);

	

	var article3 = document.createElement( 'h4' );
	article3.innerHTML = "Quit";
	article3.style.textAlign = "center";
	article3.onclick = function() {quit()};
	modal5.appendChild(article3);


	document.body.appendChild(modal1); 
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

	//create board objet with empty tiles
	board = new GameBoard(size,3,2);
	

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
	Run=setInterval(function(){updateThenDraw();},1000/5);
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

function updateThenDraw(){
	if (!paused){
		board.update();
	setTimeout(DrawCanvas, 100);
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

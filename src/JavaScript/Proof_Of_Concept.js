//	KEY			CODE
// ENTER		  15
// ARROW_UP		  38
// ARROW_DOWN	  40
// ARROW_LEFT	  37
// ARROW_RIGHT	  39
// W 			  87
// S 			  83
// A 			  65
// D 			  68

/*
* Author: Pavithran Pathmarajah
*
* Proof of Concept version two, where the square cube has been repalced with 
* an object which can be found in Proof_Of_Concept-SqrObj.js
*/

//Varaibles used
var size,width, height, gameCanvas, x,y;
//object to be moved around screen
var cube;

//retrive and setup Dimensions for canvas area and box to be used
function getSize(){
	//jquery gave most accurate window dimesnions
	width = $(window).width();
    height = $(window).height();
    //the starting point of the players box
    x = width/2;
	y = height/2;
	//the size of the box itself
	size = height /20;

	//Intialize squareobject to move around screen
	cube = new SquareObj("ff0000",x,y,size);
}

//set up game area
function setUpCanvas(){
	getSize()

	//set up html5 canvas for use
	tmp=document.getElementById("Game");
	tmp.width = width;
	tmp.height = height;
	//get drawable canvas for ajvascript to draw on
	gameCanvas= tmp.getContext("2d");
	//call the draw method 40 times per second
	Run=setInterval(function(){DrawCanvas();},1000/40);
}


//Interacts with key inputs from the webpage
function interface(event) {
	//get key pressed
   var keyIn = event.which;
   if (keyIn==40) //Arrow down
   		//y+=size*0.5; ~ Repalced with object method
   		cube.arrDown();
   else if(keyIn==38) //Arrow up
   		//y-=size*0.5; ~ Repalced with object method
   		cube.arrUp();
   else if(keyIn==37) //Arrow left
   		//x-=size*0.5; ~ Repalced with object method
   		cube.arrLeft();
   else if(keyIn==39) //Arrow right
   		//x+=size*0.5; ~ Repalced with object method
   		cube.arrRight();
   	//check if box is out of bounds
   	//outOfBounds(); ~ Repalced with object method
   	cube.checkBounds(height,width);
}

/*  ~ Repalced with object method checkBounds(height,width)
//checks if palyer box is out of bounds and resets positions accordingly
function outOfBounds(){
	if(x<0)
   		x = 0;
   	else if (x>(width-size))
   		x = width-size;
   	else if (y<0)
   		y = 0;
   	else if (y>(height-size))
   		y = height-size;
}
*/

//draw the graphics on the canvas
function DrawCanvas(){
	//erase canvas area
	gameCanvas.clearRect(0,0,width,height);
	
	//draw users box
	//gameCanvas.fillStyle = "#00ff00" ~ Repalced with object method
	//gameCanvas.fillRect(x,y,size ,size); ~ Repalced with object method
	cube.paint(gameCanvas);
}

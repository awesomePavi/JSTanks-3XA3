/*
Author: Viren Patel

The player class

*/

// Player tank definition
// calls the constructor of the Tank class
var Player = function(tileSize, x, y, gameBoard){
	Tank.call(this, tileSize, x, y, gameBoard);
}

// Player inherits Tank
inherits(Player, Tank);

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
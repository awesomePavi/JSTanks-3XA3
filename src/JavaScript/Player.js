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
Player.prototype.interface = function(event) {
	//get key pressed
   var keyIn = event.which;
   if (keyIn==40) //Arrow down
   		//y+=size*0.5; ~ Repalced with object method
   		this.moveDown();
   else if(keyIn==38) //Arrow up
   		//y-=size*0.5; ~ Repalced with object method
   		this.moveUp();
		else if(keyIn==37) //Arrow left
   		//x-=size*0.5; ~ Repalced with object method
   		this.moveLeft();
   else if(keyIn==39) //Arrow right
   		//x+=size*0.5; ~ Repalced with object method
   		this.moveRight();
	else if(keyIn==70){
		this.board.fire (this.x, this.y, 3);
	}
   	//check if box is out of bounds
   	//outOfBounds(); ~ Repalced with object method
   	
}
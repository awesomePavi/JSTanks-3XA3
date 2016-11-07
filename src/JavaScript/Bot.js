/*
Author: Viren Patel

The bot class

*/

var Bot = function(tileSize, x, y){
	Tank.call(this, tileSize, x, y);
}

inherits(Bot, Tank);
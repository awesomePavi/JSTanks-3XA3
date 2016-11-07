/*
Author: Viren Patel

The player class

*/

var Player = function(tileSize, x, y){
	Tank.call(this, tileSize, x, y);
}

inherits(Player, Tank);
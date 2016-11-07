/*
Author: Viren Patel

The player class

*/

// Player tank definition
// calls the constructor of the Tank class
var Player = function(tileSize, x, y){
	Tank.call(this, tileSize, x, y);
}

// Player inherits Tank
inherits(Player, Tank);
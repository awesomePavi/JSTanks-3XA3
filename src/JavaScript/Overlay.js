
// variable indicating if the game is paused or not.
var paused;

/**
 * Start a new game according to the user inputs for the level and map.
 */
function newGame(level, map){
	 window.location="JSTanks.html?Level="+level+"&Map="+map;
}

/**
 * Menu containing instructions and a new game options.
 */
function fillDiv(){
	 $.ajax({
        url: './Instructions.html',
        beforeSend: function(xhr) {
             xhr.setRequestHeader("Authorization", "Bearer 6QXNMEMFHNY4FJ5ELNFMP5KRW52WFXN5")
        }, success: function(data){
        	var instrOption = document.getElementById( 'instr' );
			instrOption.innerHTML = data;
  
        }
	})
	$.ajax({
        url: './newGameMenu.html',
        beforeSend: function(xhr) {
             xhr.setRequestHeader("Authorization", "Bearer 6QXNMEMFHNY4FJ5ELNFMP5KRW52WFXN5")
        }, success: function(data){
        	 var newGameOption = document.getElementById( 'newGme' );
			newGameOption.innerHTML = data;  
       }
	})
	
}

/**
 * Open the game over menu.
 * @param {string} message - A prompt telling the user that the game is over.
 */
function oopenGameOver(message){
    document.getElementById('message').style.display = "block";
    document.getElementById('message').innerHTML = message;
    document.getElementById('continue').style.display = "none";
    document.getElementById('instr').style.display = "none";
    paused = true;
    document.getElementById("PauseMenu").style.width = "100%";
}

/**
 * The game over menu.
 * @param {string} message - A prompt telling the user that the game is over.
 * @param {string} winLoss - A prompt telling the user if they won or lost.
 */
function openGameOver(message,winloss) {
    document.getElementById('continue').style.display = "none";
    document.getElementById('instr').style.display = "none";
    document.getElementById('home').style.display = "block";
    document.getElementById('quit').style.display = "block";
    document.getElementById('newGme').style.display = "block";


    document.getElementById('message').style.display = "block";
    document.getElementById('message').style.color = "#FFFFFF";
    document.getElementById('message').style.fontSize = "3.125em";
    document.getElementById('message').innerHTML = message;


    document.getElementById('message2').style.display = "block";
    document.getElementById('message2').style.color = "#FFFFFF";
    document.getElementById('message').style.fontSize = "2.5em";
    document.getElementById('message2').innerHTML = winloss;
    

    paused = true;
    document.getElementById("PauseMenu").style.width = "100%";
}

/**
 * The pause Menu
 * @param {boolean} startgame - if the game is to start or not.
 */
function openPause(startgame) {
    if (startgame){
        document.getElementById('home').style.display = "none";
        document.getElementById('quit').style.display = "none";
        document.getElementById('continue').innerHTML = "Start Game";
        document.getElementById('newGme').style.display = "none";
    }else{
        document.getElementById('home').style.display = "block";
        document.getElementById('quit').style.display = "block";
        document.getElementById('continue').innerHTML = "Continue";
        document.getElementById('newGme').style.display = "block";
    }
	paused = true;
    document.getElementById("PauseMenu").style.width = "100%";
}

/** 
 * Close the pause menu whe the user clicks on the "x" symbol inside the overlay.
 */
function closePause() {
    document.getElementById("PauseMenu").style.width = "0%";
    paused = false;
}

/**
 * When the user quits, go to this link.
 */
function quit(){
	 window.location="https://gitlab.cas.mcmaster.ca/pathmap/JSTanks";
}

/**
 * When the user selects "Home", go to this link.
 */
function home(){
	 window.location="../HomePage/homePage.html";
}



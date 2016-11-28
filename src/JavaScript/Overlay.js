var paused;

function newGame(level, map){
	 window.location="JSTanks.html?Level="+level+"&Map="+map;
}

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

function oopenGameOver(message){
    document.getElementById('message').style.display = "block";
    document.getElementById('message').innerHTML = message;
    document.getElementById('continue').style.display = "none";
    document.getElementById('instr').style.display = "none";
    paused = true;
    document.getElementById("PauseMenu").style.width = "100%";
}

/* Open when someone clicks on the span element */
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

/* Open when someone clicks on the span element */
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

/* Close when someone clicks on the "x" symbol inside the overlay */
function closePause() {
    document.getElementById("PauseMenu").style.width = "0%";
    paused = false;
}

function quit(){
	 window.location="https://gitlab.cas.mcmaster.ca/pathmap/JSTanks";
}

function home(){
	 window.location="../HomePage/homePage.html";
}



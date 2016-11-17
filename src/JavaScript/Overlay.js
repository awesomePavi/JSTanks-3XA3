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

/* Open when someone clicks on the span element */
function openPause() {
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



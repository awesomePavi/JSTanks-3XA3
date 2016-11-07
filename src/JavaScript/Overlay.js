var paused;

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


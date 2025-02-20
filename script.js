
const chessCells = document.getElementsByClassName("chess-cell");

/*
for (let x = 0; x < chessCells.length; x++) {
	if (x % 2 == 0) {
		chessCells[x].style.backgroundColor = "black";
	} else {
		chessCells[x].style.backgroundColor = "white";
	}
}
*/

/**   This section is about drap and drop **/
function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}


/** This section is about timer */
var time = 0;
var timerHandler;

function increaseTime() {
	time = time + 1;
	
	var second = time % 60;
	var minute = Math.floor(time / 60);
	
	if (minute < 10) {
		minute = "0" + minute;
	}
	
	if (second < 10) {
		second = "0" + second;
	}
	
	document.getElementById("minute").innerHTML = minute;
	document.getElementById("second").innerHTML = second;
}

function startGame() {
	timerHandler = setInterval(increaseTime, 1000);
}

function pauseGame() {
	clearInterval(timerHandler);
}




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
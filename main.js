
console.log("is this thing on?");
console.log('let\s make a tree!');

//DOM elements involved:
const mama = document.getElementById("mama");
const resetButton = document.getElementById("reset");
const growButton = document.getElementById("grow");
const heightInput = document.getElementById("height");
const characterInput = document.getElementById("character");

//object initialized
let tree ={};

//listeners set
growButton.addEventListener("click", runProgram);
resetButton.addEventListener("click", reset);
mama.addEventListener("keypress", e => (e.keyCode == 13) ? runProgram() : null);

//functions declared


function reset() {
	window.location.reload(true);
}

//this does the logic and the logs the result

function grow(tree) {

		tree.height = heightInput.value;
		tree.character = characterInput.value;

		let characterCount = 1;
		let spaceCount = tree.height - 1;

	for (var i = 0; i < tree.height; i++) {


		let spaces = " ".repeat(spaceCount);
		let characters = tree.character.repeat(characterCount);

		console.log(`${spaces} ${characters}`);


		characterCount += 2;
		spaceCount--;
	}	

}

//this handles tests and calls the function

function runProgram() {

		if (isNaN(heightInput.value)) {

				alert("Height needs a number to make a tree.");

			} else if (heightInput.value < 3) {

				alert("We need more than that to make a good tree.");

			} else if (characterInput.value == "") {

				alert("Please enter a character."); 

			} else if ( characterInput.value.length > 1){	

				alert("One character at a time please!");

			} else {

				grow(tree);
					
			}
		};

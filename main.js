
console.log("is this thing on?");
console.log('let\s make a tree!');

//variables we will need:
let mama = document.getElementById("mama");
let resetButton = document.getElementById("reset");
let growButton = document.getElementById("grow");
let heightInput = document.getElementById("height");
let characterInput = document.getElementById("character");

// The object should have two key/value pairs.
// A key that specifies the height of the pine tree.
// A key that specifies which character to use to build the pine tree.

let tree ={ height: null , character: null };

// The value for the height of the tree should be from user input 
// in a `<input type="text">` field in the DOM.
// The character to use should be from user input 
// in a `<input type="text">` field in the DOM.

growButton.addEventListener("click", runProgram);
resetButton.addEventListener("click", reset);
mama.addEventListener("keypress", e => (e.keyCode == 13) ? runProgram() : null);

function reset() {
	window.location.reload(true);
}

function runProgram () {

	if (isNaN(heightInput.value) || heightInput.value < 3) {

			alert("height needs a number over 3 to make a tree");

		} else if (characterInput.value == "") {

				alert("please enter a character"); 

			} else if ( characterInput.value.length > 1){	

				alert("one character at a time please!");

			} else {

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

				} //end for

			} //end else
		
		} //end else..if

	 //end if

 //end runProgram



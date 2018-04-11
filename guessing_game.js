var mainColors = [];
var allColors = ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","Darkorange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod","Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan","LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke","Yellow","YellowGreen"];
var finished = false;
var target;
var gameOver = false;
var guess_input_text;
var guesses = 0;

function do_game() {
	while(!finished) {
		var randomColorIndex = Math.floor(Math.random() *( allColors.length-1));
		if(mainColors.indexOf(allColors[randomColorIndex]) == -1) {
			mainColors.push(allColors[randomColorIndex]);
		}
		if(mainColors.length >= 5) {
			finished = true;
		}
	}
		var randomColorInteger = Math.floor(Math.random()*(mainColors.length));
		target = randomColorInteger;
    alert(mainColors[target]);

	while(!gameOver) {
		guess_input_text = prompt("I am thinking of one of these colors: \n\n" + mainColors +
									"\n\nWhat color am i thinking of?");
		var guess_input = parseInt(guess_input_text);
		console.log(guess_input_text);
		guesses += 1;
		gameOver = check_guess();
		if(target) {
			gameOver = false;
		}
	}
	function check_guess() {
		if(isNaN(guess_input)) {
			alert("Please enter a color");
		} gameOver = false;
		if(guess_input_text = mainColors.indexOf(allColors[randomColorIndex])) {
			alert("Sorry, I don't recognize you color \n\n" + "Please try again");
		} gameOver = false;
		if(guess_input > target) {
			alert("Sorry you guess is not correct! \n\n" + "Hint: your color is alphabetical higher than mine \n\n" + "Please try again.");
		} gameOver = false;
		if(guess_input < target) {
			alert("Sorry you guess is not correct! \n\n" + "Hint: your color is alphabetical lower than mine \n\n" + "Please try again.");
		} gameOver = false;
		if(target) {
			alert("Congratulasions! You have guess the color! \n\n" + "It took you " + guesses + " guesses to finish the game. \n\n" + "You can see the color in the background.");
            var elem_body = document.getElementsByTagName("body")[0];
            elem_body.style.background = mainColors[target];

        } gameOver = true;
	}
}

/*var mainColors = [];
var allColors = ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","Darkorange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod","Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan","LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke","Yellow","YellowGreen"];
var finished = false;
var target;
var gameOver = false;
var guess_input_text;
	while(!finished) {
		var randomColorIndex = Math.floor(Math.random() *( allColors.length-1));
		if(mainColors.indexOf(allColors[randomColorIndex]) == -1) {
			mainColors.push(allColors[randomColorIndex]);
		}
		if(mainColors.length >= 6) {
			finished = true;
			mainColors.sort();
		}
	}
	var randomMainColor = Math.floor(Math.random() * (mainColors.length-1));
	target = mainColors[randomMainColor];
	alert(target);
	while(!gameOver) {
		guess_input_text = prompt("I am thinking of one of these colors: \n\n" + mainColors +
									"\n\nWhat color am i thinking of?");
	if(guess_input_text == target) {
		gameOver = checked_guess();
	}
}*/

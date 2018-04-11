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
            mainColors.sort();
        }
        if(mainColors.length >= 5) {
            finished = true;
        }
    }
    var randomColorInteger = Math.floor(Math.random()*(mainColors.length));
    target = randomColorInteger;

    while(!gameOver) {
        guess_input_text = prompt("Я задумал один из этих цветов: \n\n" + mainColors +
            "\n\nКакой это цвет?");
        guesses += 1;
        gameOver = check_guess();
    }
    function check_guess() {
        var guess_input = mainColors.indexOf(guess_input_text);
        if(guess_input === -1) {
            alert("Введите цвет корректо");
            return false;
        }
        else if(guess_input > target) {
            alert("Уупс.. выбранный цвет не тот! \n\n" + "Подсказка: нужный цвет находится в алфавитном порядке раньше  \n\n" + "Попробуй еще раз.");
            return false;
        }
        else if(guess_input < target) {
            alert("Уупс.. выбранный цвет не тот! \n\n" + "Подсказка: нужный цвет находится в алфавитном порядке дальше \n\n" + "Попробуй еще раз.");
            return false;
        }
        else if(target) {
            alert("Поздравляю, ты нашел нужный цвет \n\n" + "Это заняло у тебя " + guesses + " попытки для завершения игры \n\n" + "Полсе нажатия на ОК ты увидишь выбранный цвет как фоновый.");
            var elem_body = document.getElementsByTagName("body")[0];
            elem_body.style.background = mainColors[target];
            return true;
        }
    }
}
function makeid() {
    var text = "";
    var possibleLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    var possibleNumbers = "0123456789"

    for (var i = 0; i < 3; i++) {
        text += possibleLetters.charAt(Math.floor(Math.random() * possibleLetters.length));
        text += possibleNumbers.charAt(Math.floor(Math.random() * possibleNumbers.length));
    }

    text = shuffleText(text);

    return text;
}

function shuffleText(input) {
    var text = input.split(""),
            n = text.length;

    for (var i = n - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = text[i];
        text[i] = text[j];
        text[j] = tmp;
    }
    return text.join("");
}
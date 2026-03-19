//Concatenate makes a complete string out of the variables it is given.
function Complete_Sentence() {
    var part_1 = "This is ";
    var part_2 = "writing a ";
    var part_3 = "sentence the ";
    var part_4 = "hard way.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

//Displays only the text within the positions you dictated
function slice_Method() {
    var Sentence = "There is something special about knowing you are hiding a secret...";
    var Section = Sentence.slice(58,67);
    document.getElementById("slice").innerHTML = Section;
}

//Converts input text to uppercase
function Uppercase_Method() {
    let text = "Welcome to the show!";
    let result = text.toUpperCase();
    document.getElementById("uppercase").innerHTML = result;
}

//The Search_Method gives you the position at which a certain keyword is located in text.
function Search_Method() {
    let text = "What position in this sentence is the word sky?";
    let position = text.search("sky");
    document.getElementById("search").innerHTML = position;
}

//Displays a number as a string
function string_Method() {
    var X = 365;
    document.getElementById("string-numbers").innerHTML = X.toString();
}

//The toPrecision method outputs the number to the precise position you have given it.
function precision_Method() {
    var Y = 3.1415926535
    document.getElementById("Precision").innerHTML = Y.toPrecision(3);
}

//The toFixed method converts a number to a string, rounded to the 
// specific number of decimals you gave it.
function toFixed_Method() {
    let num = 6.789123;
    let n = num.toFixed(2);
    document.getElementById("to-fixed").innerHTML = n;
}


//The valueOf method gives you the primitive value of a string.
function valueOf_Method() {
    let text = "Surprise!";
    let result = text.valueOf();
    document.getElementById("value-of").innerHTML = result;
}
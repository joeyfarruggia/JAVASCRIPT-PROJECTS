var A = "This is a pop-up.";

window.alert(A); 

//window.alert() is a pop-up that will show the variable that is called in it.

var B = "This is another pop-up.";

window.alert(B);

var C = "\"I hope there aren't too many pop-ups!\" - Person who doesn't like pop-ups.";
window.alert(C);

var D = "This is the last pop-up.";
window.alert(D);

var E = "This is the last pop-up, I promise.";
window.alert(E);

var F = "Sorry, I lied, if you cluck like a chicken, this will be the last pop-up.";
window.alert(F);

function My_Function() {
    var str = "You made it!";
    document.getElementById("Button_Text").innerHTML = str;
}

function Concatenate_Function() {
    var sentence = "I am learning";
    sentence += " a lot from this course!";
    document.getElementById("Concatenate").innerHTML = sentence;
}
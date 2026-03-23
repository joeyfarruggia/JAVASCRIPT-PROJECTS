function Call_Loop() {
var Digit = "";
var X = 1;
while (X <= 20) {
    Digit += "<br>" + X;
    X++;
}
document.getElementById("Loop").innerHTML = Digit;
}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List-of-Instruments").innerHTML = Content;
}

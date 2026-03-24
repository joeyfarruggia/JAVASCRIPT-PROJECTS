//The call loop function creates a loop that continues until it reaches its set end point
//A break statement jumps out of a loop at the selected point, in this instance, it stops at 15.

function Call_Loop() {
    var Digit = "";
    var X = 1;
    while (X <= 20) {
        Digit += "<br>" + X;
        X++;
        if (X === 16) { break; }
    }
    document.getElementById("Loop").innerHTML = Digit;
}

//The for loop function here displays all of the items listed in the variable
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List-of-Instruments").innerHTML = Content;
}

//The array function displays the selected variable from the list
function array_Function() {
    var Car_Picture = [];
    Car_Picture[0] = "parked";
    Car_Picture[1] = "driving";
    Car_Picture[2] = "drifting";
    Car_Picture[3] = "crashed";
    document.getElementById("Array").innerHTML = "In the picture, the car is " + Car_Picture[1] + ".";
}

//the constant function uses a set unchangeable list of strings that are displayed how selected
function constant_Function() {
    const Person = {
        name: "Joey",
        age: 35,
        city: "Redmond",
        occupation: "Developer",
    };
    document.getElementById("constant").innerHTML = "Name: " + Person.name + " Age: " + Person.age + " City: " + Person.city + " Occupation: " + Person.occupation;
}

//the let function can change the variable displayed within a function
function let_Function() {
    var Y = 43;
    document.write(Y);
    {
        let Y = 55;
        document.write("<br>" + Y);
    }
    document.write("<br>" + Y);
}

//the let object function displays the selected variables in the list
function Car_Function() {
    let car = {
        make: "Chevy ",
        model: "C10 ",
        year: "1978 ",
        color: "Red ",
        description: function () {
            return "My favorite car I own is my " + this.color + this.year + this.make + this.model;
        }
    };
    document.getElementById("Car_Object").innerHTML = car.description();
}


//the continue statement skips an iteration in a loop and moves to the next

function Continue_Function() {
    let text = "";
    for (let i = 1; i <= 10; i++) {
        if (i === 5) { continue; }
        text += i * 10 + "<br>";
    }
    document.getElementById("Continue").innerHTML = text;
}
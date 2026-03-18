//Function with a global variable, this variable
//works with both functions since it is before them.
var X = 10;
function Add_Numbers_1() {
    document.write(40 + X + "<br>");
}
function Add_Numbers_2() {
    document.write(X + 10);
}
Add_Numbers_1();
Add_Numbers_2();

//Function with a local variable (inside of a function)
//set up for fail

function Add_Numbers_3() {
    var Y = 20;
    console.log(40 + Y + "<br>");
}
function Add_Numbers_4() {
    console.log(Y + 10);
}
Add_Numbers_3();
Add_Numbers_4();

//Get Date function showing an if function
function get_Date() {
    if (new Date().getHours() < 18) {
        document.getElementById("greeting").innerHTML = "The sun is up!";
    }
}

//Get Day function showing an if function
function get_Day() {
    if (new Date().getDay() < 4) {
        document.getElementById("greeting2").innerHTML = "It's not Friday yet.";
    }
}

//Age function showing an if or else statement in use
function Age_Function() {
    Age = document.getElementById("Age").value;
    if (Age >= 21) {
        Gun = "You are old enough to buy a firearm.";
    }
    else {
        Gun = "You are not old enough to buy a firearm.";
    }
    document.getElementById("What_is_your_age?").innerHTML = Gun;
}

//Time function using getHours to display an answer to a if, elseif, else statement
function Time_Function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time , 18) {
        Reply = "It is afternoon!";
    }
    else {
        Reply = "Is is evening."
    }
    document.getElementById("Time-of-day").innerHTML = Reply;
}

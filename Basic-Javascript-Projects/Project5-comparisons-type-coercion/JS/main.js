document.write("5" + 9) //Testing different variables added together, this outputs 59

function my_Function() {
    document.getElementById("Test").innerHTML = 0 / 0; //This shows a NaN
}

function my_Function_2() {
    document.getElementById("Test-2").innerHTML = isNaN('This is a string'); //Testing NaN for a string element
}

function my_Function_3() {
    document.getElementById("Test-3").innerHTML = isNaN('010'); //Testing NaN with a number
}

function my_Function_4() {
    document.getElementById("Test-4").innerHTML = document.write(3E310); //Showing Infinity
}

function my_Function_5() {
    document.getElementById("Test-5").innerHTML = document.write(-3E310); //Shows negative Infinity
}

function my_Function_6() {
    document.getElementById("Test-6").innerHTML = document.write(9 > 4); //Boolean function for basic numbers to show true
}

function my_Function_7() {
    document.getElementById("Test-7").innerHTML = document.write(9 < 4); //Boolean function for basic numbers to show false
}

function my_Function_8() {
    document.getElementById("Test-8").innerHTML = document.write(10 == 10); //Boolean function showing equals for basic numbers to show true
}

function my_Function_9() {
    document.getElementById("Test-9").innerHTML = document.write(7 == 11); //Boolean function showing equals for basic numbers to show false
}

//These next 4 show Boolean with different set variables to return an answer based on data and value being equal

function my_Function_10() {
    X = 10;
    Y = 10;
    document.getElementById("Test-10").innerHTML = document.write(X === Y);
}

function my_Function_11() {
    A = "Green";
    B = "grey";
    document.getElementById("Test-11").innerHTML = document.write(A === B);
}

function my_Function_12() {
    C = "17";
    D = 17;
    document.getElementById("Test-12").innerHTML = document.write(C === D);
}

function my_Function_13() {
    E = 24;
    F = "grey";
    document.getElementById("Test-13").innerHTML = document.write(E === F);
}

//Different Operators used to return true or false

function my_Function_14() {
    document.getElementById("Test-14").innerHTML = document.write(10 > 5 || 3 > 9);
}

function not_Function() {
    document.getElementById("Not").innerHTML = !(20 > 10);
}

console.log(4 + 4); //Function made to show addition in Console Log but not on screen

console.log(9 < 4); //Function made to show Boolean (true or false) in Console Log but not on screen
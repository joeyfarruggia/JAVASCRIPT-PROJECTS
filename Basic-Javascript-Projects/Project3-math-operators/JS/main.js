
// This is an addition function in JavaScript
function perform_Addition() {
    var Addition = 15 + 5;
    document.getElementById("math-add").innerHTML = "15 + 5 = " + Addition;
}

//This is a subtraction function in JavaScript
function subtraction_Function() {
    var Subtraction = 10 - 7;
    document.getElementById("math-sub").innerHTML = "10 - 7 = " + Subtraction;
}

// This is a multiplication function in JavaScript
function multiplication_Function() {
    var Multiplication = 6 * 4;
    document.getElementById("math-mult").innerHTML = "6 * 4 = " + Multiplication;
}

// This is a division function in JavaScript
function division_Function() {
    var Division = 20 / 5;
    document.getElementById("math-div").innerHTML = "20 / 5 = " + Division;
}

//This is a function that will do multiple math operations in JavaScript
function multiple_Function() {
    var multiple_Math = (10 + 3) * 5 / 2 - 4;
    document.getElementById("all-math").innerHTML = "(10 + 3) * 5 / 2 - 4 = " + multiple_Math;
}

//This is a modulus function in JavaScript that will give you a remainder
function modulus_Operator() {
    var Modulus = 25 % 6;
    document.getElementById("modulus-math").innerHTML = "When you divide 25 by 6 you get a remainder of: " + Modulus;
}

//This is a negation operator function in JavaScript
function negation_Operator() {
    var x = 10;
    document.getElementById("math-neg").innerHTML = -x;
}

//This is a increment function in JavaScript
var X = 5;
X++;
window.alert(X);

//This is a decrement function in JavaScript
var Y = 6;
Y--;
window.alert(Y);

//This is a math object. It is a static function in JavaScript
var Z = Math.PI;
window.alert(Z);

//This is a random number function in JavaScript
window.alert(Math.random() * 100);

let originalAddText = "Do Addition!";
let originalSubText = "Do Subtraction!";
let originalMultText = "Do Multiplication!";
let originalDivText = "Do Division!";
let originalAllMathText = "Do Multiple Operations at once!";
let originalModulusText = "Do Modulus!";
let originalNegationText = "Do Negation!";

const mathPara = document.getElementById("math-add");
const subPara = document.getElementById("math-sub");
const multPara = document.getElementById("math-mult");
const divPara = document.getElementById("math-div");
const allMathPara = document.getElementById("all-math");
const modulusPara = document.getElementById("modulus-math");
const negationPara = document.getElementById("math-neg");

function resetAdd() {
    if (mathPara) {
        mathPara.textContent = originalAddText;
    }
}

function resetSub() {
    if (subPara) {
        subPara.textContent = originalSubText;
    }
}

function resetMult() {
    if (multPara) {
        multPara.textContent = originalMultText;
    }
}

function resetDiv() {
    if (divPara) {
        divPara.textContent = originalDivText;
    }
}

function resetAllMath() {
    if (allMathPara) {
        allMathPara.textContent = originalAllMathText;
    }
}

function resetModulus() {
    if (modulusPara) {
        modulusPara.textContent = originalModulusText;
    }
}

function resetNegation() {
    if (negationPara) {
        negationPara.textContent = originalNegationText;
    }
}

document.addEventListener('click', function (event) {

    const clickedInsideMath = mathPara && mathPara.contains(event.target);
    const clickedInsideSub = subPara && subPara.contains(event.target);
    const clickedInsideMult = multPara && multPara.contains(event.target);
    const clickedInsideDiv = divPara && divPara.contains(event.target);
    const clickedInsideAllMath = allMathPara && allMathPara.contains(event.target);
    const clickedInsideModulus = modulusPara && modulusPara.contains(event.target);
    const clickedInsideNegation = negationPara && negationPara.contains(event.target);

    if (!clickedInsideMath) {
        resetAdd();
    }

    if (!clickedInsideSub) {
        resetSub();
    }

    if (!clickedInsideMult) {
        resetMult();
    }

    if (!clickedInsideDiv) {
        resetDiv();
    }

    if (!clickedInsideAllMath) {
        resetAllMath();
    }

    if (!clickedInsideModulus) {
        resetModulus();
    }

    if (!clickedInsideNegation) {
        resetNegation();
    }

}, true);


//This will style the page and font in the HTML document
document.body.style.fontFamily = "Arial, Helvetica, sans-serif";
document.body.style.backgroundColor = "lightblue";
document.body.style.textAlign = "center";
document.body.style.fontSize = "20px";
document.body.style.margin = "0";
document.body.style.minHeight = "100vh";
document.body.style.display = "flex";
document.body.style.flexDirection = "column";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";
document.body.style.gap = "0.8rem";
document.body.style.padding = "60px";
// Checks the car input and displays a matching response message.
function Car_Function() {
    var Car_Output;
    var Cars = document.getElementById("Car_Input").value;
    var Car_String = " is a great car!";
    var Car_String_2 = "? Really? Try again...";
    switch (Cars) {
        case "Ford Raptor":
            Car_Output = "Ford Raptor" + Car_String;
            break;
        case "Ferrari F40":
            Car_Output = "Ferrari F40" + Car_String;
            break;
        case "Chevy Corvette":
            Car_Output = "Chevy Corvette" + Car_String;
            break;
        case "Honda Civic":
            Car_Output = "Honda Civic" + Car_String_2;
            break;
        case "Porsche 911":
            Car_Output = "Porsche 911" + Car_String;
            break;
        case "Audi R8":
            Car_Output = "Audi R8" + Car_String;
            break;
        default:
            Car_Output = "Please enter a car exactly as written from the list.";
    }
    document.getElementById("output").innerHTML = Car_Output;
}

// Utilizes the getElementsByClassName method to change the style of all elements with the class "Sports_Car" 
// and displays a message with the number of cars highlighted.
function Highlight_Function() {
    var Sports_Car_List = document.getElementsByClassName("Sports_Car");
    var Highlight_Message;
    for (var i = 0; i < Sports_Car_List.length; i++) {
        Sports_Car_List[i].style.color = "red";
        Sports_Car_List[i].style.fontWeight = "bold";
    }
    Highlight_Message = Sports_Car_List.length + " sports cars have been highlighted!";
    document.getElementById("Highlight_Output").innerHTML = Highlight_Message;
}

// Creates a linear gradient background for the canvas.
function Gradient_Function() {
    var Canvas = document.getElementById("Canvas");
    var Context = Canvas.getContext("2d");
    var Gradient = Context.createLinearGradient(0, 0, Canvas.width, 0);
    Gradient.addColorStop(0, "#87CEEB");
    Gradient.addColorStop(1, "#FFD700");
    Context.fillStyle = Gradient;
    Context.fillRect(0, 0, Canvas.width, Canvas.height);
}

// Function to draw a circle in the canvas when the button is clicked.
//Also added a a gradient fill background that maintains when the circle is created.
function Circle_Function() {
    var Canvas = document.getElementById("Canvas");
    var Context = Canvas.getContext("2d");
    var Center_X = Canvas.width / 2;
    var Center_Y = Canvas.height / 2;
    var Radius = 40;
    Gradient_Function();
    Context.beginPath();
    Context.arc(Center_X, Center_Y, Radius, 0, 2 * Math.PI);
    Context.fillStyle = "red";
    Context.fill();
    Context.closePath();
}

window.onload = Gradient_Function;

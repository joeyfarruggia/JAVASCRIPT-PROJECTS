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
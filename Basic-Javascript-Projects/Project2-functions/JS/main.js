var A = "This is a pop-up.";

window.alert(A); 

//window.alert() is a pop-up that will show the variable that is called in it.

var B = "This is another pop-up.";

window.alert(B);

function My_Function() {
    var str = "You did it!";
    document.getElementById("Button_Text").innerHTML = str;
}
function getMsg() {
    //step1: setup the xml http request object

    let ajaxRequest = new XMLHttpRequest();

    //get input value of name to display to user after
    //request has been made
    let inputVal = document.getElementById("fullName").value;

    //function to display user input value once request has been received
    ajaxRequest.onload = function () {
        document.getElementById("tkuMsg").innerHTML =
            "Thank you " + inputVal + " for signing up!";
    };

    //step2: prepare the type of request and what to request from the server
    ajaxRequest.open("GET", "response.html", true);
    //step3: defines the AJAX response callback method that establishes
    //whether the response was successful and where the data should be displayed.
    ajaxRequest.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            document.getElementById("content").innerHTML = ajaxRequest.responseText;
        }
    };

    //step4: send the request to the server
    ajaxRequest.send();
}

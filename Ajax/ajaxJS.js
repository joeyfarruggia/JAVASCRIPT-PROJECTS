// Fetches the contents of content.html and injects it into the #content element
// without reloading the page.
function loadContent() {
    // Create a new XMLHttpRequest object to handle the AJAX request
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        // readyState 4 means the request is complete; status 200 means success
        if (this.readyState == 4 && this.status == 200) {
            // Add the returned HTML into the element with id="content"
            document.getElementById("content").innerHTML = this.responseText;
        }
    };

    xhttp.open("GET", "content.html", true);

    // Send the request to the server
    xhttp.send();
}
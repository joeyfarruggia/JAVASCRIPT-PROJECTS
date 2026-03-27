// Checks the form fields and shows a message if the input is valid or invalid.
function Validate_Form(event) {
	var Name = document.getElementById("name").value.trim();
	var Email = document.getElementById("email").value.trim();
	var Message = document.getElementById("message").value.trim();
	var Form_Message = document.getElementById("Form_Message");
	var At_Position = Email.indexOf("@");
	var Dot_Position = Email.lastIndexOf(".");

	if (Name === "" || Email === "" || Message === "") {
		event.preventDefault();
		Form_Message.textContent = "Please fill out all required fields.";
		Form_Message.style.color = "red";
		return;
	}

	if (At_Position < 1 || Dot_Position < At_Position + 2 || Dot_Position === Email.length - 1) {
		event.preventDefault();
		Form_Message.textContent = "Please enter a valid email address.";
		Form_Message.style.color = "red";
		return;
	}

	event.preventDefault();
	Form_Message.textContent = "Form submitted successfully!";
	Form_Message.style.color = "green";
}

// Runs the form validation when the user submits the form.
document.getElementById("Contact_Form").addEventListener("submit", Validate_Form);

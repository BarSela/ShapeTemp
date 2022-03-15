function validateSignupForm() {
    var fullName = document.getElementById("signName").value;
	var email = document.getElementById("signEmail").value;
	var password = document.getElementById("signPassword").value;
    var passwordRepeat = document.getElementById("signPasswordRepeat").value;
    var checkbox = document.querySelector("input[name=cb]");
	if (email == "" || fullName == "" || password == "" || passwordRepeat == "" ) {
		document.getElementById("errorMsg").innerHTML = "Please fill the required fields"
		return false;
	}
    else if (password.length < 8) {
		document.getElementById("errorMsg").innerHTML = "Your password must include atleast 8 characters"
		return false;
	}
    else if (password != passwordRepeat) {
		document.getElementById("errorMsg").innerHTML = "please confirm your password"
		return false;
	}
	else {
		alert("Successfully signed up");
		return true;
	}
    

    
}

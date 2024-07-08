function validateForm() {
    var username = document.getElementById("username").value.trim();
    var email = document.getElementById("email").value.trim();
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    document.getElementById("usernameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("passwordError").textContent = "";
    document.getElementById("confirmPasswordError").textContent = "";

    var isValid = true;


    if (username === "") {
        document.getElementById("usernameError").textContent = "Username is required";
        isValid = false;
    }


    if (email === "") {
        document.getElementById("emailError").textContent = "Email is required";
        isValid = false;
    } else if (!isValidEmail(email)) {
        document.getElementById("emailError").textContent = "Invalid email format";
        isValid = false;
    }

  
    if (password === "") {
        document.getElementById("passwordError").textContent = "Password is required";
        isValid = false;
    } else if (password.length < 6) {
        document.getElementById("passwordError").textContent = "Password must be at least 6 characters long";
        isValid = false;
    }

 
    if (confirmPassword === "") {
        document.getElementById("confirmPasswordError").textContent = "Please confirm your password";
        isValid = false;
    } else if (confirmPassword !== password) {
        document.getElementById("confirmPasswordError").textContent = "Passwords do not match";
        isValid = false;
    }

    if (isValid) {
       
        document.getElementById("successModal").style.display = "block";

       
    }

    return false; 
}

function isValidEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function closeModal() {
    document.getElementById("successModal").style.display = "none";
}

function togglePasswordVisibility() {
    var passwordInput = document.getElementById("password");
    var toggleButton = document.querySelector(".toggle-password");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        toggleButton.textContent = "👁️";
    } else {
        passwordInput.type = "password";
        toggleButton.textContent = "👁️";
    }
}

const form = document.getElementById("registerForm");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");

    let valid = true;

    document.querySelectorAll(".error").forEach(error => {
        error.textContent = "";
    });

    if (name.value.trim() === "") {
        name.nextElementSibling.textContent = "Name is required";
        valid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email.value)) {
        email.nextElementSibling.textContent = "Enter a valid email";
        valid = false;
    }

    if (password.value.length < 6) {
        password.nextElementSibling.textContent =
        "Password must be at least 6 characters";
        valid = false;
    }

    if (confirmPassword.value !== password.value) {
        confirmPassword.nextElementSibling.textContent =
        "Passwords do not match";
        valid = false;
    }

    if (valid) {
        alert("Registration Successful!");
        form.reset();
    }
});
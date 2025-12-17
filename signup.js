// Get form
const form = document.getElementById("signupForm");

form.addEventListener("submit", function (event) {
    event.preventDefault(); // stop form submission

    // Get values
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const terms = document.getElementById("terms").checked;

    // Basic validation
    if (
        firstName === "" ||
        lastName === "" ||
        email === "" ||
        username === "" ||
        password === "" ||
        confirmPassword === ""
    ) {
        alert("Please fill in all fields.");
        return;
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Password length
    if (password.length < 6) {
        alert("Password must be at least 6 characters.");
        return;
    }

    // Password match
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    // Terms checkbox
    if (!terms) {
        alert("You must agree to the Terms & Conditions.");
        return;
    }

    // If everything is OK
    alert("Registration successful!");
    form.reset();
});

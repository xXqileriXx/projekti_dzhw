const form = document.getElementById("signupForm");

form.addEventListener("submit", function (event) {
    event.preventDefault(); 

    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const terms = document.getElementById("terms").checked;

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

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters.");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    if (!terms) {
        alert("You must agree to the Terms & Conditions.");
        return;
    }

    alert("Registration successful!");
    form.reset();
});

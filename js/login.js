const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (event) {
    event.preventDefault(); 

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;

    if (username === "" || password === "") {
        alert("Please fill in all fields.");
        return;
    }

    alert("Login successful!");
    loginForm.reset();
});

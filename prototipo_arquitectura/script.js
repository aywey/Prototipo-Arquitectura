const validCredentials = {
    email: "booking@gmail.com",
    password: "123456"
};

const form = document.getElementById("login-form");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const errorMessage = document.getElementById("error-message");

form.addEventListener("submit", function (event) {
    event.preventDefault(); 

    const email = emailInput.value.trim();
    const password = passwordInput.value;

    if (email === validCredentials.email && password === validCredentials.password) {
        alert("Inicio de sesión exitoso");
        window.location.href = "home.html";

    } else {
        errorMessage.textContent = "Correo o contraseña incorrectos.";
        errorMessage.style.display = "block";
    }
});
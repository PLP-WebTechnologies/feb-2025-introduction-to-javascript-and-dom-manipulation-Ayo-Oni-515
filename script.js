const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const alertExit = document.getElementById("alertExit");

function surpise() {
    // Show message box
    document.getElementById("alert-box").style.display = "block";
}

function exitAlert() {
    // Remove message box
    document.getElementById("alert-box").style.display = "none";
}

function messLayout() {
    document.body.style.display = "flex";
    document.getElementById("alert-box").style.display = "block";
    document.getElementById("message").textContent = "Refresh to reset";
}

button1.addEventListener("click", messLayout);
button2.addEventListener("click", surpise);
alertExit.addEventListener("click", exitAlert)


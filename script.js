async function registerUser() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    await fetch("http://localhost:5000/auth/register", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ username, password }) });
}

async function loginUser() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    await fetch("http://localhost:5000/auth/login", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ username, password }) });
}

function sendMessage() {
    const message = document.getElementById("message").value;
    fetch("http://localhost:5000/chat/send", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ sender: "user1", receiver: "user2", message }) });
}

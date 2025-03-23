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
 // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBriiZfaS2hU1qYBsyJEYs13bK-UcdrsXc",
    authDomain: "royalstar-chat.firebaseapp.com",
    projectId: "royalstar-chat",
    storageBucket: "royalstar-chat.firebasestorage.app",
    messagingSenderId: "847429163840",
    appId: "1:847429163840:web:7d2d9ea561de6c957338a5",
    measurementId: "G-BG7TR96RVN"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

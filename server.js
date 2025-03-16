const express = require("express");
const cors = require("cors");
const http = require("http");
const socketIo = require("socket.io");
require("dotenv").config();
const authRoutes = require("./routes/authRoutes");
const chatRoutes = require("./routes/chatRoutes");

const app = express();
const server = http.createServer(app);
const io = socketIo(server, { cors: { origin: "*" } });

app.use(express.json());
app.use(cors());

app.use("/auth", authRoutes);
app.use("/chat", chatRoutes);

io.on("connection", (socket) => {
    console.log("A user connected");
    socket.on("sendMessage", ({ sender, receiver, message }) => {
        io.emit("receiveMessage", { sender, receiver, message });
    });
    socket.on("disconnect", () => {
        console.log("A user disconnected");
    });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));


// backend/database.js
const mysql = require("mysql2");
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

db.connect(err => {
    if (err) {
        console.error("Database connection failed: ", err);
        process.exit(1);
    }
    console.log("Connected to MySQL database");
});
module.exports = db;

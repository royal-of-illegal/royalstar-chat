const express = require("express");
const db = require("../database");
const router = express.Router();

router.post("/send", (req, res) => {
    const { sender, receiver, message } = req.body;
    db.query("INSERT INTO messages (sender, receiver, message) VALUES (?, ?, ?)", [sender, receiver, message],
        (err) => {
            if (err) return res.status(500).json({ message: "Message failed to send" });
            res.json({ message: "Message sent successfully" });
        }
    );
});

router.get("/messages", (req, res) => {
    db.query("SELECT * FROM messages", (err, results) => {
        if (err) return res.status(500).json({ message: "Failed to fetch messages" });
        res.json(results);
    });
});
module.exports = router;

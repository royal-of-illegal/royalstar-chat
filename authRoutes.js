const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../database");
const router = express.Router();

router.post("/register", async (req, res) => {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    db.query("INSERT INTO users (username, email, password) VALUES (?, ?, ?)",
        [username, email, hashedPassword],
        (err, result) => {
            if (err) return res.status(500).json({ message: "Registration failed" });
            res.json({ message: "User registered successfully" });
        }
    );
});

router.post("/login", (req, res) => {
    const { email, password } = req.body;
    db.query("SELECT * FROM users WHERE email = ?", [email], async (err, results) => {
        if (err || results.length === 0) return res.status(401).json({ message: "Invalid credentials" });
        const user = results[0];
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });
        const token = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET, { expiresIn: "1h" });
        res.json({ message: "Login successful", token });
    });
});
module.exports = router;


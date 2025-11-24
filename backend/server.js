const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());               // Mengizinkan akses dari frontend
app.use(express.json());       // Memproses JSON dari request body

// Import logika chatbot dari file chatbotLogic.js
const generateBotResponse = require("./chatbotLogic");

// API endpoint untuk chatbot
app.post("/chat", (req, res) => {
    const userMessage = req.body.message;

    // Validasi minimal
    if (!userMessage || userMessage.trim() === "") {
        return res.json({ reply: "Pesan tidak boleh kosong." });
    }

    const reply = generateBotResponse(userMessage);
    res.json({ reply });
});

// Jalankan server
app.listen(3000, () => {
    console.log("Server berjalan di http://localhost:3000");
});

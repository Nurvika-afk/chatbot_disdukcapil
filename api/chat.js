const generateBotResponse = require("../chatbotLogic");

module.exports = (req, res) => {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Only POST allowed" });
    }

    const userMessage = req.body.message;

    if (!userMessage || userMessage.trim() === "") {
        return res.json({ reply: "Pesan tidak boleh kosong." });
    }

    const reply = generateBotResponse(userMessage);
    res.json({ reply });
};
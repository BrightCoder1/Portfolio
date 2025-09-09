/* eslint-disable no-undef */
require("dotenv").config();
const express = require("express");
const app = express();
const nodemailer = require("nodemailer");
const cors = require("cors");
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3001;

app.post("/submit", async (req, res) => {
    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASS
        }
    });

    const mailOptions = {
        from: process.env.EMAIL,
        to: process.env.EMAIL,
        subject: `Message from ${name}`,
        text: message
    };

    try {
        await transporter.sendMail(mailOptions);

        // Send confirmation email to user
        const confirmOptions = {
            from: process.env.EMAIL,
            to: email,
            subject: `Email Sent Successfully to ${name}`,
            text: "Thank you for contacting me. I'll get back to you as soon as possible."
        };
        await transporter.sendMail(confirmOptions);

        res.status(200).json({ message: "Message sent successfully" });
    } catch (err) {
        res.status(500).json({ error: err.toString() });
    }
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
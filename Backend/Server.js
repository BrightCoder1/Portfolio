require("dotenv").config();
const express = require("express");
const app = express();
const nodemailer = require("nodemailer");
const cors = require("cors");
app.use(cors());
app.use(express.json());


const PORT = process.env.PORT || 3001;

app.post("/submit", (req, res) => {
    const { name, email, message } = req.body;

    console.log("REQ", req.body)

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASS
        }
    });

    
    const mailOptions = {
        from: email,
        to: process.env.EMAIL,
        subject: `Message from ${name}`,
        text: message
    }

    const data = transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.log("ERROR", err)
            res.send("error" + JSON.stringify(err));
        } else {
            console.log("INFO", info)
            const data = transporter.sendMail(mailOptions, (err, info) => {
                if (err) {
                    console.log("ERROR", err)
                    res.send("error" + JSON.stringify(err));
                } else {
                    console.log("INFO", info)
                    // res.send("Email Sent Successfully.");
                    const mailOptions = {
                        to: email,
                        from: process.env.EMAIL,
                        subject: `Email Sent Successfully to ${name}`,
                        text: "Thank you for contacting me. I'll get back to you as soon as possible."
                    }
                    const data = transporter.sendMail(mailOptions);

                }
            });
        }
    });

    console.log("data", data)
})

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})
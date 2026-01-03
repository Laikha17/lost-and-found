import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

app.post("/match-score", async (req, res) => {
  try {
    const { lost, found } = req.body;

    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const prompt = `
    Compare the following two items and return ONLY a number between 0 and 100.

    Lost item:
    ${lost}

    Found item:
    ${found}

    Respond with ONLY the number.
    `;

    const result = await model.generateContent(prompt);
    const text = result.response.text();

    const score = parseInt(text.match(/\d+/)?.[0] || "0");
    res.json({ score });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Gemini error" });
  }
});

app.listen(process.env.PORT, () =>
  console.log("Gemini server running")
);

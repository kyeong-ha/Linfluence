import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

// variable
const PORT = 5001;
const app = express();

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// routing
app.get("/api", (req, res) => {
    res.json({ title: "Hello" });
});

// server start
app.listen(PORT, () => {
    console.log(`✅ Listening on http://localhost:5000/`);
});
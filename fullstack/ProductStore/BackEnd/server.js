import express from 'express';
import dotenv from "dotenv";
import { connectDB } from './config/db.js';
dotenv.config();
const app = express();
app.get("/", (req, res) => {
    res.send("Server is ready");
});

app.post("/products", async(req, res) => {
    const products = req.body;
    res.send(products);
});

console.log(process.env.PORT);
const port = process.env.PORT || 5000;

app.listen(5000, () => {
    console.log('Server started at http://localhost:5000');
}); 

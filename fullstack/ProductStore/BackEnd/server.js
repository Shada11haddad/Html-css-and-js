import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import Product from "./Models/product.model.js";

dotenv.config();

const app = express();

// Middleware to parse JSON request bodies.
app.use(express.json());

app.get("/", (req, res) => {
	res.send("Hello from the root route!");
  });
  
// Route to create a new product.
app.post("/api/products", async (req, res) => {
    try {
        const product = req.body;
        
        // Validate required fields.
        if (!product.name || !product.price || !product.image) {
            return res.status(400).json({
                success: false,
                message: "Please fill all fields"
            });
        }
        
        // Create and save a new product.
        const newProduct = new Product(product);
        await newProduct.save();
        
        res.status(201).json({
            success: true,
            data: newProduct
        });
    } catch (error) {
        console.error("Error in create product:", error);
        res.status(500).json({
            success: false,
            message: "Server error"
        });
    }
});
app.delete("/api/products/:id", async (req, res) => {
	try {
		const id = req.params.id;
		
		// Find and delete the product.
		const deletedProduct = await Product.findByIdAndDelete(id);
	}catch (error) {
		console.error("Error in delete product:", error);
		res.status(500).json({
			success: false,
			message: "Server error"
		});
	}
	});
// Start the server and connect to the database.
app.listen(5000, () => {
    connectDB();
    console.log("Server is running on port 5000 at http://localhost:5000");
});

import { time } from "console";
import mongoose from "mongoose";
import { type } from "os";
const productSchema = mongoose.Schema({
    name: {
    
        type: String,
        required: true,

    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
        image: {
            type: String,
            required: true
        }
    }, {
        timestamps: true //created at and updated at
    
    
});

const Product = mongoose.model('Product', productSchema);
export default Product;
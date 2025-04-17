import mongoose from " mongoose";
import { Category } from "./category.model";

const ProductSchema= new mongoose.Schema({
    description:{
        type:String,
        required: true,
    },
    name:{
        required: true,
        type:String,
    },
    productImage:{
        type: String, // here we try to use the url of the image and other things also which is stored at cloud n all
    },
    price:{
        type: Number,
        default: 0
    },
    stock:{
        type:Number,
        default: 0
    },
    category:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true,
    },
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    }
}, {timestamps: true});

export const Product= mongoose.model("Product", ProductSchema)
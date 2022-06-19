const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        desc: { type: String, required: true },
        img: [{ type: String, required: true }],
        categories: [{ type: String, required: true }],
        gender: [{ type: String, required: true }],
        size: [{ type: String, required: true }],
        color: [{ type: String, required: true }],
        price: { type: Number, required: true },
        inStock: { type: Boolean, default: true },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema)
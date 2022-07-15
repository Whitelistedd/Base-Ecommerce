import mongoose from 'mongoose'

const product = new mongoose.Schema(
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
)

const ProductSchema = mongoose.model('Product', product)

export default ProductSchema

import { ProductDataType } from '@/types/GlobalTypes.model'
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
		inStock: { type: Number, required: true },
		price: { type: Number, required: true },
	},
	{ timestamps: true }
)

const ProductSchema =
	(mongoose.models.Product as mongoose.Model<ProductDataType>) ||
	mongoose.model('Product', product)

export default ProductSchema

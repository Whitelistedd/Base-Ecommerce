import mongoose from 'mongoose'

const review = new mongoose.Schema(
  {
    title: { type: String, required: true },
    desc: { type: String, required: true },
    product: { type: String, required: true },
    date: { type: String, required: true },
  },
  {
    timestamps: true,
  }
)

const reviewsSchema = mongoose.models.review || mongoose.model('review', review)

export default reviewsSchema

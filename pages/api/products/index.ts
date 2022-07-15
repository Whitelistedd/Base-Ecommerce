import type { NextApiRequest, NextApiResponse } from 'next'
import { connect } from '../../../lib/connection'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(500).json({ message: 'not a GET request' })
  }

  const qNEW = req.query.new
  const qCategory = req.query.category
  try {
    const { ProductSchema } = await connect()

    let products

    if (qNEW) {
      products = await ProductSchema.find().sort({ createdAt: -1 }).limit(5)
    } else if (qCategory) {
      products = await ProductSchema.find({
        categories: {
          $in: [qCategory],
        },
      })
    } else {
      products = await ProductSchema.find()
    }

    res.status(200).json(products)
  } catch (err) {
    res.status(500).json('Product doesnt exist')
  }
}

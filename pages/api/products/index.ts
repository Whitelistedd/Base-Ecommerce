import type { NextApiRequest, NextApiResponse } from 'next'
import { connect } from '../../../lib/connection'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(500).json({ message: 'not a GET request' })
  }
  try {
    const { ProductSchema } = await connect()
    const products = await ProductSchema.find()

    res.status(200).json(products)
  } catch (err) {
    res.status(500).json('Product doesnt exist')
  }
}

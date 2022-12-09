import type { NextApiRequest, NextApiResponse } from 'next'

import Joi from 'joi'
import { connect } from '@/lib/connection'

const ProductIdSchema = Joi.object({
  id: Joi.string().min(1).required(),
})

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(500).json({ message: 'not a GET request' })
  }

  try {
    ProductIdSchema.validate(req.query)
    const values = await ProductIdSchema.validateAsync(req.query)
    const { ProductSchema } = await connect()
    const product = await ProductSchema.findById(values.id)

    res.status(200).json(product)
  } catch (err) {
    res.status(500).json('product doesnt exist')
  }
}

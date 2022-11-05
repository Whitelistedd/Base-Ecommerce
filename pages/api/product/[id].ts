import type { NextApiRequest, NextApiResponse } from 'next'

import { connect } from 'lib/connection'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(500).json({ message: 'not a GET request' })
  }

  try {
    const { ProductSchema } = await connect()
    const product = await ProductSchema.findById(req.query.id)

    res.status(200).json(product)
  } catch (err) {
    res.status(500).json('product doesnt exist')
  }
}

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
    const resPerPage = 8
    const page = Number(req.query.page)
    const { ProductSchema } = await connect()
    const products = await ProductSchema.find()
      .skip(resPerPage * page - resPerPage)
      .limit(resPerPage)

    const totalPages = await ProductSchema.count()

    res.status(200).json({ products, totalPages, page })
  } catch (err) {
    res.status(500).json('Product doesnt exist')
  }
}

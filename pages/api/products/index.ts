import type { NextApiRequest, NextApiResponse } from 'next'
import { client } from '../../../src/sanityClient'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(500).json({ message: 'not a GET request' })
  }
  try {
    const ProductsQuery = '*[_type == "product"]'
    const response = await client
      .fetch(ProductsQuery)
      .then((response) => response)

    res.status(200).json(response)
  } catch (err) {
    res.status(500).json('Product doesnt exist')
  }
}

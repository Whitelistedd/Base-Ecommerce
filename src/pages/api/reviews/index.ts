import type { NextApiRequest, NextApiResponse } from 'next'

import { connect } from '@/lib/connection'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(500).json({ message: 'not a GET request' })
  }

  try {
    const { reviewsSchema } = await connect()
    const reviews = await reviewsSchema.find()

    res.status(200).json(reviews)
  } catch (err) {
    res.status(500).json(err)
  }
}

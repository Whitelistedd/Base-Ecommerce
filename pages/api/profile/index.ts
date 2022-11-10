import type { NextApiRequest, NextApiResponse } from 'next'

import { connect } from 'lib/connection'
import { getSession } from '@auth0/nextjs-auth0'
import user from 'redux/slices/user'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    console.log(req.body)
    return res.status(500).json({ message: 'not a GET request' })
  }

  try {
    const { AccountSchema } = await connect()
    const session = getSession(req, res)
    if (session) {
      const profile = await AccountSchema.findOne({ id: session.user.sub })

      if (session.user.sub === profile.id) {
        res.status(200).json(profile)
      } else {
        res.status(404).json({ message: 'wrong account' })
      }
    } else {
      res.status(500).json('you must be logged in')
    }
  } catch (err) {
    res.status(500).json(err)
  }
}

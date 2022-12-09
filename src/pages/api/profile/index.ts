import type { NextApiRequest, NextApiResponse } from 'next'

import Joi from 'joi'
import { connect } from '@/lib/connection'
import { getSession } from '@auth0/nextjs-auth0'
import user from '@/redux/slices/user'

const AccountDataSchema = Joi.object({
  firstName: Joi.string().min(3).min(1),
  lastName: Joi.string().min(3).min(1),
  address: Joi.object({
    address: Joi.string().min(1),
    city: Joi.string().min(1),
    country: Joi.string().min(1),
    zipCode: Joi.string().min(1),
  }),
  phoneNumber: Joi.string().min(1),
})

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    try {
      const { AccountSchema } = await connect()
      const session = getSession(req, res)
      if (session) {
        const profile = await AccountSchema.findOne({ id: session.user.sub })

        if (profile && session.user.sub === profile.id) {
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
  } else if (req.method === 'POST') {
    try {
      const { AccountSchema } = await connect()
      const newAccountData = await AccountDataSchema.validateAsync(req.body)
      const session = getSession(req, res)
      if (session) {
        await AccountSchema.updateOne({ id: session.user.sub }, newAccountData)
        res.status(200).json('success')
      } else {
        res.status(404).json('account not found')
      }
    } catch (err) {
      res.status(500).json(err)
    }
  }
}

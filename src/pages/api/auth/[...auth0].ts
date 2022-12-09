import { NextApiRequest, NextApiResponse } from 'next'
import { handleAuth, handleCallback, handleLogin } from '@auth0/nextjs-auth0'

import { connect } from '@/lib/connection'

const afterCallback = async (
  req: NextApiRequest,
  res: NextApiResponse,
  session: {
    user: {
      email?: string
      sub?: string
      given_name?: string
      family_name?: string
    }
  }
) => {
  if (session) {
    const { AccountSchema } = await connect()
    const exists = await AccountSchema.find({ id: session.user.sub })
    if (exists.length < 1 && session.user.sub && session.user.email) {
      let newAccount = await new AccountSchema({
        id: session.user.sub,
        email: session.user.email,
        firstName: session.user.given_name,
        lastName: session.user.family_name,
        orders: [],
        address: {
          address: '',
          apartment: '',
          city: '',
          country: '',
          zipCode: '',
        },
      })
      await newAccount.save()
    }
  }
  return session
}

export default handleAuth({
  async login(request, response) {
    await handleLogin(request, response, {
      returnTo: '/profile',
    })
  },
  async callback(req, res) {
    try {
      await handleCallback(req, res, {
        afterCallback: (req, res, session) => afterCallback(req, res, session),
      })
    } catch (error: any) {
      res.status(error.status || 500).end(error.message)
    }
  },
})

import type { NextApiRequest, NextApiResponse } from 'next'

import { connect } from 'lib/connection'
import countries from 'i18n-iso-countries'

countries.registerLocale(require('i18n-iso-countries/langs/en.json'))

const allCountrynames = countries.getNames('en')

const formattedCountries = Object.keys(allCountrynames).map((key) => ({
  name: allCountrynames[key],
  id: key,
}))

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(500).json({ message: 'not a GET request' })
  }

  try {
    res.status(200).json(formattedCountries)
  } catch (err) {
    res.status(500).json(err)
  }
}

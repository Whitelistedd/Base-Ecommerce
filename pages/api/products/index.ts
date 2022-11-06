import type { NextApiRequest, NextApiResponse } from 'next'

import { connect } from 'lib/connection'

const filters = ['gender', 'color', 'size', 'categories']

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(500).json({ message: 'not a GET request' })
  }
  try {
    const reqFilters = Object.keys(req.query)
      .map((query) => filters.includes(query) && query)
      .filter((query) => typeof query === 'string')

    let formattedFilters = {}
    reqFilters.map(
      (filter) =>
        (formattedFilters = {
          ...formattedFilters,
          [`${filter}`]: req.query[`${filter}`],
        })
    )

    console.log(req.query)

    const resPerPage = 8
    const page = Number(req.query.page || 0)
    const { ProductSchema } = await connect()
    const products = await ProductSchema.find(formattedFilters)
      .skip(resPerPage * page - resPerPage)
      .limit(resPerPage)

    const productCount = await ProductSchema.count(formattedFilters)
    const totalPages = Math.ceil(productCount / resPerPage)

    res.status(200).json({ products, totalPages, page })
  } catch (err) {
    res.status(500).json('Product doesnt exist')
  }
}

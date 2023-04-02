import type { NextApiRequest, NextApiResponse } from 'next'

import Joi from 'joi'
import { connect } from '@/lib/connection'

const filters = ['gender', 'color', 'size', 'categories']

const filterSchema = Joi.object({
  page: Joi.number().integer().min(1),
  gender: Joi.string().min(3).valid('men', 'women'),
  color: Joi.string().min(3),
  size: Joi.string().min(1),
  categories: Joi.string().min(3),
})

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(500).json({ message: 'not a GET request' })
  }
  try {
    filterSchema.validate(req.query)
    const values = await filterSchema.validateAsync(req.query)
    const reqFilters = Object.keys(values)
      .map((query) => filters.includes(query) && query)
      .filter((query) => typeof query === 'string')

    let formattedFilters = {}
    reqFilters.map(
      (filter) =>
        (formattedFilters = {
          ...formattedFilters,
          [`${filter}`]: values[`${filter}`],
        })
    )

    const resPerPage = 8
    const page = Number(values.page || 1)
    const { ProductSchema } = await connect()
    const products = await ProductSchema.find(formattedFilters)
      .skip(resPerPage * page - resPerPage)
      .limit(resPerPage)
      .lean()

    const productCount = 13
    const totalPages = Math.ceil(productCount / resPerPage)
    if (products.length > 0) {
      return res.status(200).json({ products, totalPages, page })
    }
    return res.status(200).json({ message: 'products corrupted' })
  } catch (err) {
    console.log(err)
    res.status(500).json('Product doesnt exist')
  }
}

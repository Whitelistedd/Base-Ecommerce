//IMPORT MONGOOSE
import mongoose from 'mongoose'
import CartSchema from './models/Cart'
import OrderSchema from './models/Order'
import ProductSchema from './models/Product'

// CONNECTING TO MONGOOSE (Get Database Url from .env.local)
const { MONGO_URLL } = process.env

// connection function
export const connect = async () => {
  const conn = await mongoose
    .connect(MONGO_URLL as string)
    .catch((err) => console.log(err))
  console.log('Mongoose Connection Established')

  return { conn, CartSchema, OrderSchema, ProductSchema }
}

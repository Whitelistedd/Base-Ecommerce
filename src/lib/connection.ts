//IMPORT MONGOOSE

import AccountSchema from './models/Account'
import CartSchema from './models/Cart'
import OrderSchema from './models/Order'
import ProductSchema from './models/Product'
import mongoose from 'mongoose'
import reviewsSchema from './models/Reviews'

// ПОДКЛЮЧЕНИЕ К MONGOOSE (получение URL-адреса базы данных из .env.local)
const { MONGO_URLL } = process.env

// функция соединения
export const connect = async () => {
  const conn = await mongoose
    .connect(MONGO_URLL as string)
    .catch((err) => console.log(err))

  return {
    conn,
    CartSchema,
    OrderSchema,
    ProductSchema,
    reviewsSchema,
    AccountSchema,
  }
}

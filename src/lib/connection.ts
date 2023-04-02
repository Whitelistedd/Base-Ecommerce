//IMPORT MONGOOSE

import AccountSchema from './models/Account'
import CartSchema from './models/Cart'
import OrderSchema from './models/Order'
import ProductSchema from './models/Product'
import mongoose from 'mongoose'
import reviewsSchema from './models/Reviews'

// ПОДКЛЮЧЕНИЕ К MONGOOSE (получение URL-адреса базы данных из .env.local)
const { MONGO_URLL } = process.env
let cachedConnection: void | typeof mongoose | null = null
// функция соединения
export const connect = async () => {
  if (!cachedConnection) {
    const connection = await mongoose
      .connect(MONGO_URLL as string)
      .catch((err) => console.log(err))
    cachedConnection = connection
  }

  return {
    cachedConnection,
    CartSchema,
    OrderSchema,
    ProductSchema,
    reviewsSchema,
    AccountSchema,
  }
}

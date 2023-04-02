import mongoose from 'mongoose'

const order = new mongoose.Schema(
  {
    key: { type: String, required: true },
    products: [
      {
        _id: {
          type: String,
          required: true,
        },
        color: {
          type: String,
          required: true,
        },
        size: {
          type: String,
          required: true,
        },
        quantity: {
          type: Number,
          default: 1,
          min: [1, 'Quantity can not be less then 1.'],
          required: true,
        },
      },
    ],
    address: {
      address: {
        type: String,
        required: true,
      },
      apartment: {
        type: String,
        required: false,
      },
      city: {
        type: String,
        required: true,
      },
      country: {
        type: String,
        required: true,
      },
      zipCode: {
        type: String,
        required: true,
      },
    },
    total: { type: Number, required: false },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    shippingMethod: { type: String, required: true },
    status: { type: String, default: 'pending' },
  },
  { timestamps: true }
)

export type orderProductType = {
  _id: string
  color: string
  size: string
  quantity: number
}
export interface orderType {
  key: string
  products: orderProductType[]
  address: {
    address: string
    apartment: string
    city: string
    country: string
    zipCode: string
  }
  firstName: string
  lastName: string
  email: string
  phoneNumber: string
  shippingMethod: string
  status: string
  createdAt: string
  updatedAt: string
}

const OrderSchema = mongoose.models?.Order || mongoose.model('Order', order)

export default OrderSchema

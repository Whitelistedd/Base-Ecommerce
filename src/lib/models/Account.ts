import mongoose from 'mongoose'
import { Schema, model, models, Model } from 'mongoose'
const account = new Schema(
  {
    id: { type: String, required: true },
    email: { type: String, required: true },
    orders: { type: Array, required: false },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    phoneNumber: { type: String, required: false },
    address: {
      address: { type: String, required: false },
      city: { type: String, required: false },
      country: { type: String, required: false },
      zipCode: { type: String, required: false },
    },
  },
  {
    timestamps: true,
  }
)

const AccountSchema =
  (models?.account as Model<{ id: string }>) || model('account', account)

export default AccountSchema

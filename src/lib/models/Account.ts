import mongoose from 'mongoose'

const account = new mongoose.Schema(
	{
		id: { type: String, required: true },
		email: { type: String, required: true },
		orders: { type: Array, required: false },
		firstName: { type: String, required: true },
		lastName: { type: String, required: true },
		phoneNumber: { type: String, required: true },
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
	(mongoose.models.account as mongoose.Model<{ id: string }>) ||
	mongoose.model('account', account)

export default AccountSchema

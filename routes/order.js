const router = require("express").Router();
const Order = require("../models/Order");
const Product = require("../models/Product")
const { YooCheckout } = require('@a2seven/yoo-checkout');
const { verifyToken, verifyTokenAndAuthorization, verifyAdminToken } = require("./verifyToken")

// CREATE ORDER
const checkout = new YooCheckout({ shopId: process.env.shopID, secretKey: process.env.kassaPASS });

router.post('/', async (req, res) => {

    const newOrder = await new Order(req.body.order)

    const productIDS = newOrder.products.map(item => {
        return {
            id: item._id,
            qty: item.quantity
        }
    }
    )

    let price = 0

    for (let i = 0; i < productIDS.length; i++) {
        const confirmedOrders = await Product.findOne({ _id: productIDS[i].id })
        price += confirmedOrders.price * productIDS[i].qty
    }

    let total = 0

    if (newOrder.shippingMethod === "Cdek") {
        total += price + 700
    } else if (newOrder.shippingMethod === "PochtaRussia") {
        total += price + 500
    } else {
        return res.status(500)
    }

    const createPayload = {
        amount: {
            value: `${total}`,
            currency: 'RUB'
        },
        confirmation: {
            type: 'embedded'
        }
    };

    try {
        const payment = await checkout.createPayment(createPayload, req.body.key);
        res.status(200).json(payment)
        const ConfirmedOrder = await newOrder.save()
    } catch (error) {
        res.status(500)
    }
});

//UPDATE ORDER

router.put("/:id", verifyAdminToken, async (req, res) => {

    try {
        const updatedOrder = await Order.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true }
        )
        res.status(200).json(updatedOrder)
    } catch (err) {
        res.status(500).json("Something went wrong...")
    }
})

// DELETE ORDER

router.delete("/:id", verifyAdminToken, async (req, res) => {
    try {
        await Order.findByIdAndDelete(req.params.id)
        res.status(200).json("Order has been deleted.")
    } catch (err) {
        res.status(500).json(err)
    }
})

//GET USER ORDERS

router.get("/find/:userid", verifyTokenAndAuthorization, async (req, res) => {
    try {
        const Orders = await Order.findOne({ userId: req.params.userId })

        res.status(200).json(Order);
    } catch (err) {
        res.status(500).json("Order doesnt exist")
    }
})

//GET ALL ORDERS

router.get("/", verifyAdminToken, async (req, res) => {
    try {
        const Order = await Order.find()
        res.status(200).json(Order)
    } catch (error) {
        res.status(500).json(error)
    }
})

// GET MONTHLY INCOME 

router.get("/income", verifyAdminToken, async (req, res) => {
    const date = new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1))
    const previousMonth = new Date(new Date().setMonth(date.getMonth() - 1))

    try {

        const income = await Order.aggregate([
            { $match: { createdAt: { $gte: previousMonth } } },
            {
                $project: {
                    month: { $month: "$createdAt" },
                    sales: "$amount"
                },
            },
            {
                $group: {
                    _id: "$month",
                    total: { $sum: "$sales" }
                },
            },
        ])
        res.status(200).json(income)

    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router
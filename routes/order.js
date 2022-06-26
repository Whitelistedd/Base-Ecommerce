const router = require("express").Router();
const Order = require("../models/Order");
const Product = require("../models/Product")
const axios = require('axios');
const { verifyToken, verifyTokenAndAuthorization, verifyAdminToken } = require("./verifyToken");
const { response } = require("express");

// CREATE ORDER

router.post('/', async (req, res) => {

    const newOrder = await new Order(req.body)

    const productIDS = newOrder.products.map(item => {
        return {
            id: item._id,
            qty: item.quantity
        }
    }
    )

    let price = 0

    const confirmedProducts = await Promise.all(productIDS.map(async (product) => { return await Product.findOne({ _id: product.id }) })).catch((err) => console.log(err))

    let total = 0

    confirmedProducts.forEach(product => total += product.price)

    if (newOrder.shippingMethod === "Cdek") {
        total += price + 700
    } else if (newOrder.shippingMethod === "PochtaRussia") {
        total += price + 500
    } else {
        console.log(newOrder)
        return res.status(500)
    }

    try {
        const response = await axios.post(
            'https://api.yookassa.ru/v3/payments',
            {
                'amount': {
                    'value': `${total}`,
                    'currency': 'RUB'
                },
                'capture': true,
                'confirmation': {
                    'type': 'redirect',
                    'return_url': `${process.env.BASEURL}/order/success`
                }
            },
            {
                headers: {
                    'Idempotence-Key': `${newOrder.key}`,
                    'Content-Type': 'application/json'
                },
                auth: {
                    username: process.env.shopID,
                    password: process.env.kassaPASS
                }
            }
        );
        console.log(response.data)
        res.status(200).json(response.data)
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
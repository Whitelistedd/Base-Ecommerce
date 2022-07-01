const router = require("express").Router();
const Order = require("../models/Order");
const Product = require("../models/Product")
const axios = require('axios');
const { verifyToken, verifyTokenAndAuthorization, verifyAdminToken } = require("./verifyToken");
const { response } = require("express");

// CREATE ORDER

router.post('/', async (req, res) => {

    let newOrder = await new Order(req.body)

    /* взять все идентификаторы продуктов и количества */
    const productIDS = newOrder.products.map(item => {
        return {
            id: item._id,
            qty: item.quantity
        }
    }
    )

    /* функция для получения всех сведений о продукте из базы данных */
    const confirmedProducts = await Promise.all(productIDS.map(async (product) => {
        return { qty: product.qty, product: await Product.findOne({ _id: product.id }) }
    }))

        .catch((err) => console.log(err))

    /* функция проверки наличия всех товаров на складе из базы данных */
    confirmedProducts.forEach(Info => Info.product.inStock === false && res.status(400).json({ message: "one of the products are not inStock, please go to your cart and delete the item" }))

    let total = 0

    /* рассчитать цену */
    confirmedProducts.forEach(Info => total += Info.product.price * Info.qty)

    if (newOrder.shippingMethod === "Cdek") {
        total += 700
    } else if (newOrder.shippingMethod === "PochtaRussia") {
        total += 500
    } else {
        return res.status(500)
    }

    /* получить новую схему с ценой заказа */
    newOrder = await new Order({ ...newOrder._doc, total: total })

    try {
        /* получить адрес платежа от yandex kassa */
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
        res.status(200).json(response.data)
        const ConfirmedOrder = await newOrder.save()
    } catch (error) {
        console.log(error)
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
        const AllOrder = await Order.find()
        res.status(200).json(AllOrder)
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
                    sales: "$total"
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
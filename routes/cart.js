const router = require("express").Router();
const Cart = require("../models/Cart")
const { verifyToken, verifyTokenAndAuthorization, verifyAdminToken } = require("./verifyToken")

// ADD CART
router.post('/', verifyToken, async (req, res) => {
    const newCart = new Cart(req.body)
    try {
        const savedCart = await newCart.save()
        res.status(200).json(savedCart)
    } catch (error) {
        res.status(500).json(error)
    }
});

//UPDATE A CART

router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {

    try {
        const updatedCart = await Cart.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true }
        )
        res.status(200).json(updatedCart)
    } catch (err) {
        res.status(500).json(err)
    }
})

// DELETE A CART

router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
    try {
        await Cart.findByIdAndDelete(req.params.id)
        res.status(200).json("Product has been deleted.")
    } catch (err) {
        res.status(500).json(err)
    }
})

//GET A USERS CART

router.get("/find/:id", verifyTokenAndAuthorization, async (req, res) => {
    try {
        const cart = await Cart.findOne({ userId: req.params.userId })

        res.status(200).json(cart);
    } catch (err) {
        res.status(500).json("product doesnt exist")
    }
})

//GET ALL CARTS

router.get("/", verifyAdminToken, async (req, res) => {
    try {
        const carts = await Cart.find()
        res.status(200).json(carts)
    } catch (error) {
        res.status(500).json(error)
    }
})


module.exports = router
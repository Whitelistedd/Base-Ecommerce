const router = require("express").Router();
const Product = require("../models/Product")
const { verifyToken, verifyTokenAndAuthorization, verifyAdminToken } = require("./verifyToken")

// ADD PRODUCT

router.post('/', verifyAdminToken, async (req, res) => {
    const newProduct = new Product(req.body)
    try {
        const savedProduct = await newProduct.save()
        res.status(200).json(savedProduct)
    } catch (error) {
        res.status(500).json(error)
    }
});

//UPDATE PRODUCT

router.put("/:id", verifyAdminToken, async (req, res) => {

    try {
        const updatedProduct = await Product.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true }
        )
        res.status(200).json(updatedProduct)
    } catch (err) {
        res.status(500).json(err)
    }
})

// DELETE PRODUCT

router.delete("/:id", verifyAdminToken, async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id)
        res.status(200).json("Product has been deleted.")
    } catch (err) {
        res.status(500).json(err)
    }
})

//GET PRODUCT

router.get("/find/:id", async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)

        res.status(200).json(product);
    } catch (err) {
        res.status(500).json("product doesnt exist")
    }
})

//GET ALL PRODUCTS OR ALL NEW PRODUCTS

router.get("/", async (req, res) => {
    const qNEW = req.query.new
    const qCategory = req.query.category
    try {

        let products;

        if (qNEW) {
            products = await Product.find().sort({ createdAt: -1 }).limit(5)
        } else if (qCategory) {
            products = await Product.find({
                categories: {
                    $in: [qCategory]
                },
            });
        } else {
            products = await Product.find()
        }

        res.status(200).json(products)
    } catch (err) {
        res.status(500).json("Product doesnt exist")
    }
})

module.exports = router
const router = require("express").Router();
const Product = require("../models/product");

// POST request - creates a new instance of the product
router.post("/product", async (req, res) => {
  try {
    // validate input
    const product = new Product(req.body);
    await product.save();
    res.json("product successfully created");
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err,
      data: {},
    });
  }
});

//GET request - get all products

//GET request - get single product

//PUT request - update a single product

//DELETE request - delete a single product

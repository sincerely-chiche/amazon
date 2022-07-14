const router = require("express").Router();
const Category = require("../models/category");

// POST request - creates a new instance of the product
router.post("/", async (req, res) => {
  try {
    const category = new Category();
    category.type = req.body.type;

    await category.save();

    res.json({
      status: "success",
      data: {},
      message: "Category saved successfully.",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "failed",
      message: err,
      data: {},
    });
  }
});

//GET request - get all categories
router.get("/", async (req, res) => {
  try {
    const categories = await Category.find({});

    res.json({
      status: "success",
      message: "Category fetched successfully.",
      data: categories,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "failed",
      message: err,
      data: {},
    });
  }
});

//GET request - get single category

//PUT request - update a single category

//DELETE request - delete a single category

module.exports = router;

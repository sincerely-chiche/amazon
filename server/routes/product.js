const router = require("express").Router();
const Product = require("../models/product");
const formidable = require("formidable");

const uploadImage = require("../middlewares/upload-photo");

// POST request - creates a new instance of the product
router.post("/", async (req, res) => {
  try {
    // validate input
    // parse a file upload
    const form = formidable();

    form.parse(req, async (err, fields, files) => {
      if (err) {
        throw new Error(err);
      }

      const imageId = await uploadImage(files.file.filepath);

      const product = new Product();
      product.title = fields.title;
      product.description = fields.description;
      product.photo = imageId;
      product.price = fields.price;
      product.stock = fields.stock;

      await product.save();
      res.json({
        status: "success",
        message: "Product saved successfully",
        data: {},
      });
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

//GET request - get all products

//GET request - get single product

//PUT request - update a single product

//DELETE request - delete a single product

module.exports = router;

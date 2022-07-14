const Owner = require("../models/owner");
const router = require("express").Router();

//adding a new owner
router.post("/", async (req, res) => {
  try {
    const owner = new Owner();
    owner.name = req.body.name;
    owner.about = req.body.about;

    await owner.save();

    res.json({
      status: "success",
      message: "Owner saved successfully",
      data: {},
    });
  } catch (error) {
    res.statusCode(500).json({
      status: "error",
      message: error.message,
      data: {},
    });
  }
});

//getting owners
router.get("/", async (req, res) => {
  try {
    let owners = await Owner.find({});

    res.json({
      status: "success",
      message: "Owner fetched successfully",
      data: owners,
    });
  } catch (error) {
    res.statusCode(500).json({
      status: "error",
      message: error.message,
      data: {},
    });
  }
});

module.exports = router;

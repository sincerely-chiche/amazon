const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const { default: mongoose } = require("mongoose");
require("dotenv").config();

const app = express();
const User = require("./models/user");

mongoose.connect(process.env.DATABASE, (err) => {
  if (err) console.error(err);
  console.log("connected to database");
});

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));

//require apis
const productRoutes = require("./routes/product");
const categoryRoutes = require("./routes/category");
const ownerRoutes = require("./routes/owner");

//route middlewares
app.use("/api/products", productRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/owners", ownerRoutes);

const port = process.env.PORT || 3000;

app.listen(port, (err) => {
  if (err) console.log(err);

  console.log(`Server running at http://localhost:${port}`);
});

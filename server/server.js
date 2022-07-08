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

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.post("/", (req, res) => {
  let user = new User(req.body);
  user.save(function (err) {
    if (err) {
      console.error(err);
      res.json(err);
    }

    res.json("user details saved successfully");
  });
});

const port = process.env.PORT || 3000;

app.listen(port, (err) => {
  if (err) console.log(err);

  console.log(`Server running at http://localhost:${port}`);
});

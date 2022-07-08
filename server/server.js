const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const app = express();

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.post("/", (req, res) => {
  console.log(req.body.name);
  res.status(200).send("Hello World!");
});

app.listen(3000, (err) => {
  if (err) console.log(err);

  console.log("Server running at http://localhost:3000");
});

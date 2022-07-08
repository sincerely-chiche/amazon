const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ownerSchema = new Schema({
  name: { type: String },
  about: { type: String },
  photos: { type: String },
});

module.exports = mongoose.model("Owner", ownerSchema);

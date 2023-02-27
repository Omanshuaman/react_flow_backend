const mongoose = require("mongoose");

const ProductsSchema = new mongoose.Schema({
  When: {
    type: String,
    required: true,
  },
  Condition: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("Products", ProductsSchema);

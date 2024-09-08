const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
  user_id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const cart = mongoose.model("cart", cartSchema);

module.exports = cart;


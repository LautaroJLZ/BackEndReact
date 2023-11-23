const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const cartEsquema = new Schema({
  imagen: {
    type: String,
    required: true,
  },
  nombre: {
    type: String,
    required: true,
  },
  marca: {
    type: String,
    required: true,
  },
  precio: {
    type: Number,
    required: true,
  },
  oferta: {
    type: String,
    required: false,
  },
  amount: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("cart", cartEsquema);

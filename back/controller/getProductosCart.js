const Cart = require("../models/cart");

const getProductosCart = async (req, res) => {
  const productosCart = await Cart.find({});

  if (productosCart) {
    res.json({ productosCart });
  } else {
    res.json({ mesaje: "No hay productos en el carrito " });
  }
};

module.exports = getProductosCart;

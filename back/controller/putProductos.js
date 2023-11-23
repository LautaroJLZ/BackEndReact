const Cart = require("../models/cart");

const putProductos = async (req, res) => {
  const { productoId } = req.params;
  const { query } = req.query;
  const body = req.body;

  const productoBuscado = await Cart.findById(productoId);

  if (!query) {
    res.status(400).json({ mensaje: "Debe enviar una query " });
  } else if (productoBuscado && query === "add") {
    body.amount = body.amount + 1;

    await Cart.findByIdAndUpdate(productoId, body, {
      new: true,
    }).then((producto) => {
      res.json({
        mensaje: `El producto: ${producto.nombre} fue actualizado`,
        producto,
      });
    });
  } else if (productoBuscado && query === "del") {
    body.amount = body.amount - 1;

    await Cart.findByIdAndUpdate(productoId, body, {
      new: true,
    }).then((producto) =>
      res.json({
        mensaje: `El producto: ${producto.nombre} fue actualizado`,
        producto,
      })
    );
  } else {
    res.status(400).json({ mensaje: "ocurrio un error " });
  }
};

module.exports = putProductos;

const Cart = require("../models/cart");
const Productos = require("../models/modelo");

const addProductosCart = async (req, res) => {
  try {
    const { nombre, imagen, marca, precio, oferta } = req.body;

    const estaEnProductos = await Productos.findOne({ nombre });

    const noEstaVacio = nombre !== "" && imagen !== "" && precio !== "";

    const estaEnElCarrito = await Cart.findOne({ nombre });

    if (!estaEnProductos) {
      return res.status(400).json({
        mensaje: "Este producto no se encuentra en nuestra base de datos",
      });
    }

    if (noEstaVacio && !estaEnElCarrito) {
      const nuevoProductoEnCart = new Cart({
        nombre,
        imagen,
        precio,
        marca,
        oferta,
        amount: 1,
      });

      await Productos.findByIdAndUpdate(
        estaEnProductos?._id,
        { incart: true, nombre, imagen, marca, oferta, precio },
        { new: true }
      );

      await nuevoProductoEnCart.save();

      return res.json({
        mensaje: "El producto fue agregado al carrito ",
        Productos: estaEnProductos,
      });
    } else if (estaEnElCarrito) {
      return res.status(400).json({
        mensaje: "El producto ya está en el carrito",
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      mensaje: "Error interno del servidor",
    });
  }
};

module.exports = addProductosCart;

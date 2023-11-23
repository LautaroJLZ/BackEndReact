const Cart = require("../models/cart");
const Productos = require("../models/modelo");

const addProductosCart = async (req, res) => {
  const { nombre, imagen, marca, precio, oferta } = req.body;

  const estaEnProductos = await Productos.findOne({ nombre });

  const noEstaVacio = nombre !== "" && imagen !== "" && precio !== "";

  const estaEnElCarrito = await Cart.findOne({ nombre });

  if (!estaEnProductos) {
    res.status(400).json({
      mensaje: "Este producto no se encuentra en nuestra base de datos",
    });
  } else if (noEstaVacio && !estaEnElCarrito) {
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
    )
      .then((Producto) => {
        nuevoProductoEnCart.save();
        res.json({
          mensaje: "El producto fue agregado al carrito ",
          Producto,
        });
      })
      .catch((error) => console.erorr(error));
  } else if (estaEnElCarrito) {
    res.status(400).json({
      mensaje: " El producto ya esta en el carrito",
    });
  }
};

module.exports = addProductosCart;

const Cart = require("../models/cart");

const deleteProductos = async (req, res) => {
  try {
    const { productoId } = req.params;
    const productoBuscado = await Cart.findById(productoId);

    if (!productoBuscado) {
      return res.status(404).json({ mensaje: "Producto no encontrado" });
    }

    await Cart.findByIdAndDelete(productoId);

    res.json({
      mensaje: `El producto: ${productoBuscado.nombre} fue eliminado`,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Ocurrió un error en el servidor" });
  }
};

module.exports = deleteProductos;

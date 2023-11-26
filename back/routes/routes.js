const express = require("express");
const router = express.Router();

const {
  obtenerDatos,
  crearDato,
  getProductosCart,
  addProductosCart,
  putProductos,
  deleteProductos,
} = require("../controller/controller");

router.get("/", obtenerDatos);
router.get("/productos-cart", getProductosCart);
router.post("/", crearDato);
router.post("/productos-cart", addProductosCart);
router.put("/productos-cart/:productoId", putProductos);
router.delete("/productos-cart/:productoId", deleteProductos);

module.exports = router;
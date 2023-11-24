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

// ---------------------------------------------------------
import {login, register, logOut, profile} from '../controller/auth.controller.js'
import {authRequired} from '../middlewares/validateToken.js'
import {validateSchema} from '../middlewares/validator.middleware.js'
import {registerSchema, loginSchema} from '../schemas/auth.schema.js'

router.post('/api/register', validateSchema(registerSchema), register);

router.post('/api/login', validateSchema(loginSchema), login);

router.post('/logOut', logOut);

router.get('/perfil', authRequired, profile);



module.exports = router;

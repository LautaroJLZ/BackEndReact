const express =require('express')
const router=express.Router()

const {obtenerDatos,crearDato} =require('../controller/controller')


router.get('/',obtenerDatos)
router.post('/',crearDato)

module.exports = router
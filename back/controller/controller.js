const productos=require('../models/modelo')
const mongoose=require('mongoose')

const  obtenerDatos = async (req,res) =>{
    const datos= await productos.find({})
    res.status(200).json(datos)
}

const crearDato= async (req,res)=>{
    const {imagen,nombre,marca,precio,oferta}=req.body

    try{
        const datos= await productos.create({imagen,nombre,marca,precio,oferta})
        res.status(200).json(datos)
    }
    catch(error){
        res.status(400).json({error:error.message})

    }

}

module.exports={obtenerDatos,crearDato}
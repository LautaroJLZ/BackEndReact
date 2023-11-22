require('dotenv').config()
const express = require('express')
const app=express()
const mongoose=require('mongoose')
const rutas=require('./routes/routes')
const cors = require('cors');


app.use(express.json())
const dbUrl = process.env.DB_URL

app.use(cors());


app.use('/miapi/pepe',rutas)
const PORT = process.env.PORT

mongoose.connect(dbUrl)
.then(()=>{
    console.log('se conecto la base')
    app.listen(process.env.PORT,()=>{
    console.log('el servidor esta listo en el puerto: ' + PORT)
})
}).catch((error)=>{
    console.log(error)
})
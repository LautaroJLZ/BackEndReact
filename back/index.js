const express = require('express')

const app=express()
const mongoose=require('mongoose')
const rutas=require('./routes/routes')

app.use(express.json())


app.use('/miapi/pepe',rutas)

mongoose.connect('mongodb+srv://LautaroJLZ:mongoAtlas23*@cluster0.00gruig.mongodb.net/?retryWrites=true&w=majority')
.then(()=>{
    console.log('se conecto la base')
    app.listen(3200,()=>{
    console.log('el servidor esta listo')
})
}).catch((error)=>{
    console.log(error)
})
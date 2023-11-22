// require('dotenv').config()
// const express = require('express')
// const app=express()
// const mongoose=require('mongoose')
// const rutas=require('./routes/routes')
// const cors = require('cors');
// app.use(express.json())
// const dbUrl = process.env.DB_URL
// app.use(cors());
// app.use('/miapi/pepe',rutas)
// const PORT = process.env.PORT
// mongoose.connect(dbUrl)
// .then(()=>{
//     console.log('se conecto la base')
//     app.listen(process.env.PORT,()=>{
//     console.log('el servidor esta listo en el puerto: ' + PORT)
// })
// }).catch((error)=>{
//     console.log(error)
// })


require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const rutas = require('./routes/routes');

app.use(express.json());

// Configuración de CORS
app.use(cors());

const dbUrl = process.env.DB_URL;
const PORT = process.env.PORT;

app.use('/miapi/pepe', rutas);

mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Se conectó a la base de datos');
    app.listen(PORT, () => {
      console.log(`El servidor está listo en el puerto: ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error al conectar con la base de datos:', error);
  });

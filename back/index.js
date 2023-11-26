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

//--------------------------------------

import express from "express";
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";
import taskRoute from "./routes/tasks.routes.js";
import dotenv from "dotenv";
import rutas from "./routes/auth.routes.js";
import mongoose from "mongoose";
dotenv.config();

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

// const rutas = require('./routes/routes.js');

app.use("/api", taskRoute);
app.use("/miapi/pepe", rutas);

const dbUrl = process.env.DB_URL;
const PORT = process.env.PORT;

mongoose
  .connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Se conectó a la base de datos");
    app.listen(PORT, () => {
      console.log(`El servidor está listo en el puerto: ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error al conectar con la base de datos:", error);
  });

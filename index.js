const express = require('express');
require('dotenv').config();
const { dbConnection } = require('./database/config');

// Servidor
const app = express();

// Base de Datos
dbConnection();

// console.log(process.env);

// Rutas
app.get('/', (req, res)=>{
    res.status(200).json({
        ok: true,
        msg: 'Hola Mundo'
    });
});

app.listen(process.env.PORT, ()=>{
    console.log('Servidor corriendo en puerto: '+ process.env.PORT);
});
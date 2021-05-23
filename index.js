const express = require('express');
require('dotenv').config();
const cors = require('cors');

const { dbConnection } = require('./database/config');

// Servidor
const app = express();

// Configurar CORS
app.use(cors());

// Base de Datos
dbConnection();

// console.log(process.env);

// Rutas
app.use('/api/usuarios', require('./routes/usuarios'));



app.listen(process.env.PORT, ()=>{
    console.log('Servidor corriendo en puerto: '+ process.env.PORT);
});
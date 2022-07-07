const express = require('express');
require('dotenv').config();
var cors = require('cors');
const { dbConnection } = require('./database/config');


const app = express();
app.use(cors());
app.use(express.json());

//base de datos mongodb
dbConnection();

//rutas


app.listen(process.env.PORT, () => {
    console.log('servidor corriendo puerto ' + process.env.PORT);
});
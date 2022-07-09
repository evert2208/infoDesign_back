const express = require('express');
require('dotenv').config();
const cors = require('cors');
const { dbConnection } = require('./database/config');

const app = express();
const server = require('http').Server(app);
app.use(cors());
const io = require('socket.io')(server, {
    cors: {
        origins: ['http://localhost:4200']
    }
})

app.use(express.json());

//base de datos mongodb
dbConnection();

//rutas
app.use('/api/grupos', require('./routes/grupos'));

app.listen(process.env.PORT, () => {
    console.log('servidor corriendo puerto ' + process.env.PORT);
});
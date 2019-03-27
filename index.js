'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = 3700;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/portafolio')
    .then(() => {
        console.log("Conexion establecida...");
        //creación del servidor
        app.listen(port, () =>{
            console.log("Servidor listo...en puerto http:3700");
        })

    })
    .catch(err => console(err));

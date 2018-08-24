'use strict'

var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/curso_mean_social', { useNewUrlParser: true })
    .then(() => {
        console.log('Conexion exitosa :)');
    })
    .catch(err => console.log(err));


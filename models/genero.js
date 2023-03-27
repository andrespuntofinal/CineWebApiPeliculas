const { Schema, model } = require('mongoose');

const GeneroSchema = Schema({
    genero: {

        type: String,
        required: [true, 'El género es obligatorio']
    }

});


module.exports = model('Genero', GeneroSchema );


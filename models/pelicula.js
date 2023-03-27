const { Schema, model } = require('mongoose');

const PeliculaSchema = Schema({

    nombre:{

        type: String,
        required: [true, 'El nombre de la película es obligatorio']
    },

    descripcion:{

        type: String,
        required: [true, 'La descripción de la película es obligatoria']
        
    },

    genero:{

        type: String,
        required: true,
        emun: ['ACCION', 'ROMANCE', 'TERROR', 'COMEDIA', 'AVENTURA', 'DRAMA', 'DOCUMENTAL', 'OTRO']
    },
    

    director:{

        type: String,
        required: [true, 'El director es obligatorio']
    },

    elenco:{

        type: String,
        required: [true, 'El elenco es obligatorio']
    },

    duracion:{

        type: String,
        required: [true, 'La duración es obligatoria']
    },
    
    estado:{

        type: Boolean,
        default: true
    },

    urlimg:{

        type: String,
        required: [false, 'La url es obligatoria']
    },



});

module.exports = model('Pelicula', PeliculaSchema );
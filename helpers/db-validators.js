const Genero = require('../models/genero');
const Pelicula = require('../models/pelicula');

const esGeneroValido = async (genero='') => {
    const existeGenero = await Genero.findOne({ genero });

    if ( !existeGenero ) {
        throw new Error(`El género ${genero} no está registrado en la DB`);
        
    }
}

const peliculaExiste = async (nombre ='') => {
     //Verificar correo
     const existePelicula = await Pelicula.findOne({ nombre })

     if ( existePelicula ) {
        throw new Error(`La película ${nombre} ya está registrada`);
     }
  
}



module.exports = {

    esGeneroValido,
    peliculaExiste
}
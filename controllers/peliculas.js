const { response, request } = require('express');
const Pelicula = require('../models/pelicula');


const peliculasGet =async (req = request, res = response) => {

    const { limite = 5, desde = 0 } = req.query;
    const query = { estado: true };
    
     
    const [ total, peliculas ] = await Promise.all([
        Pelicula.countDocuments(query),
        Pelicula.find(query)
            .skip( Number(desde) )
            .limit( Number(limite) )


    ])

    res.json({
       
       total,
       peliculas
    });
}

const peliculasGetById =async (req = request, res = response) => {

    const { id } = req.params;
    //const query = { estado: true };
    //const uuid = req.params;
    const query = { nombre: id };
    
         
    const [ peliculas ] = await Promise.all([
       
        Pelicula.findOne( query )


    ])

    //console.log("PPPPPP" + req.params);

    res.json({
       
       
        peliculas
    });
}

const peliculasPost = async (req, res = response) => {

const { nombre, descripcion, genero, director, elenco, duracion, estado, urlimg } = req.body;
const pelicula =  new Pelicula ( { nombre, descripcion, genero, director, elenco, duracion, estado, urlimg  } );

    await pelicula.save();

    res.json({
        
        pelicula
    });
}

const peliculasPut = async (req, res = response) => {

    const { id } = req.params;
    const { _id, ...resto } = req.body;

    //validar contra db

const pelicula = await Pelicula.findByIdAndUpdate( id, resto );

    res.json(pelicula);
}

const peliculasPatch = (req, res = response) => {
    res.json({
        msg: 'patch API - usuariosPatch'
    });
}

const peliculasDelete = async (req, res = response) => {

    const { id } = req.params;

    //borrar físicamente
   // const usuario = await Usuario.findByIdAndDelete( id );

   const pelicula = await Pelicula.findByIdAndUpdate( id, { estado:false } );

    res.json( pelicula );
}




module.exports = {
    peliculasGet,
    peliculasGetById,
    peliculasPost,
    peliculasPut,
    peliculasPatch,
    peliculasDelete,
}
const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { esGeneroValido, peliculaExiste } = require('../helpers/db-validators');


const { peliculasGet,
        peliculasGetById,
        peliculasPut,
        peliculasPost,
        peliculasDelete,
        peliculasPatch } = require('../controllers/peliculas');

const router = Router();


router.get('/', peliculasGet );

router.get('/:id', peliculasGetById );

router.put('/:id', [

    check('id', 'No es un Id válido').isMongoId().bail(),
    
    
    validarCampos
], peliculasPut );

router.post('/', [
    check('nombre', 'El nombre de la película es obligatorio').not().isEmpty(),
    check('nombre').custom(peliculaExiste),
    check('descripcion', 'La descripcion de la película es obligatorio').not().isEmpty(),
    check('director', 'El director es obligatorio').not().isEmpty(),
    check('elenco', 'El elenco es obligatorio').not().isEmpty(),
    check('duracion', 'La duración es obligatoria').not().isEmpty(),
    
    check('genero').custom( esGeneroValido ),
    validarCampos

] , peliculasPost );

router.delete('/:id', [

    check('id', 'No es un Id válido').isMongoId().bail(),
    //check('id').custom( existeUsuarioPorId ),
    
    validarCampos
], peliculasDelete );

router.patch('/', peliculasPatch );

module.exports = router;
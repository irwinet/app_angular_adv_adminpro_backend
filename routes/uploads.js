/*
    Ruta: /api/uploads/
*/

const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');
const expressFileUpload = require('express-fileupload');

const { fileUpload, retornaImagen } = require('../controllers/uploads');

const router = Router();

// default options
router.use(expressFileUpload());

router.put('/:tipo/:id', validarJWT, fileUpload);
//router.get('/:tipo/:foto', validarJWT, retornaImagen);
router.get('/:tipo/:foto', retornaImagen);

module.exports = router;
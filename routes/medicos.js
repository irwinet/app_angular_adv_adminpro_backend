/*
    Ruta: /api/medicos
*/

const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');
const { getMedicos, postMedico, putMedico, deleteMedico } = require('../controllers/medicos');

const router = Router();

router.get('/', getMedicos);

router.post('/', [
    validarJWT,
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('hospital', 'No es un un MongoId Valido').isMongoId(),
    validarCampos
],postMedico);

router.put('/:id', [
    
], putMedico);

router.delete('/:id', deleteMedico);

module.exports = router;
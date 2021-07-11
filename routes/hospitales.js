/*
    Ruta: /api/hospitales
*/

const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');
const { getHospitales, postHospital, putHospital, deleteHospital } = require('../controllers/hospitales');

const router = Router();

router.get('/', getHospitales);

router.post('/', [
    
],postHospital);

router.put('/:id', [
    
], putHospital);

router.delete('/:id', deleteHospital);

module.exports = router;
const { response } = require('express');
const Hospital = require('../models/hospital');

const getHospitales = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'getHospitales'
    });
}

const postHospital = async (req, res = response) => {
    const uid = req.uid;

    const hospital = new Hospital({
        usuario: uid,
        ...req.body
    });
    
    //console.log(uid);

    try {

        const hospitalDB = await hospital.save();

        res.json({
            ok: true,
            hospital: hospitalDB
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }
}

const putHospital = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'putHospital'
    });
}

const deleteHospital = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'deleteHospital'
    });
}

module.exports = {
    getHospitales,
    postHospital,
    putHospital,
    deleteHospital
}
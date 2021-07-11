const { response } = require('express');

const getHospitales = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'getHospitales'
    });
}

const postHospital = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'postHospital'
    });
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
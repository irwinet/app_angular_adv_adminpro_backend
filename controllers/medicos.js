const { response } = require('express');

const getMedicos = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'getMedicos'
    });
}

const postMedico = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'postMedico'
    });
}

const putMedico = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'putMedico'
    });
}

const deleteMedico = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'deleteMedico'
    });
}

module.exports = {
    getMedicos,
    postMedico,
    putMedico,
    deleteMedico
}
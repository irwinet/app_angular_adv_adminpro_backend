const { response } = require('express');

const Usuario = require('../models/usuario');
const Medico = require('../models/medicos');
const Hospital = require('../models/hospital');

const getTodo = async (req, res) => {

    const busqueda = req.params.busqueda;
    const regexp = new RegExp(busqueda, 'i');

    const [usuarios, medicos, hospitales] = await Promise.all([
        Usuario.find({ nombre: regexp }),
        Medico.find({ nombre: regexp }),
        Hospital.find({ nombre: regexp })
    ]);

    // const usuarios = await Usuario.find({ nombre: regexp });
    // const medicos = await Medico.find({ nombre: regexp });
    // const hospitales = await Hospital.find({ nombre: regexp });

    res.json({
        ok: true,
        msg: 'getTodo',
        usuarios,
        medicos,
        hospitales
    });
}

const getDocumentosColeccion = async (req, res) => {

    const busqueda = req.params.busqueda;
    const tabla = req.params.tabla;
    const regexp = new RegExp(busqueda, 'i');

    let data = [];
    switch (tabla) {
        case 'medicos':
            data = await Medico.find({ nombre: regexp })
                .populate('usuario', 'nombre img')
                .populate('hospital', 'nombre img');
            break;

        case 'hospitales':
            data = await Hospital.find({ nombre: regexp })
                .populate('usuario', 'nombre img');
            break;

        case 'usuarios':
            data = await Usuario.find({ nombre: regexp });
            break;

        default:
            return res.status(400).json({
                ok: false,
                msg: 'La tabla tiene que ser medicos/hospitales/usuarios'
            });
    }

    res.json({
        ok: true,
        resultados: data
    });
}

module.exports = {
    getTodo,
    getDocumentosColeccion
}
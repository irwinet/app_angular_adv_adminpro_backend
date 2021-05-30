const { response } = require('express');
const Usuario = require('../models/usuario');

const getUsuarios = async(req, res = response)=>{
    
    const usuarios = await Usuario.find({}, 'nombre email role google');
    
    res.status(200).json({
        ok: true,
        usuarios
    });
}

const postUsuario = async(req, res)=>{

    const { email, password, nombre } = req.body;    

    try {

        const existeEmail = await Usuario.findOne({email});
        if(existeEmail)
        {
            return res.status(400).json({
                ok:false,
                msg: 'El correo ya esta registrado'
            });
        }

        const usuario = new Usuario(req.body);

        await usuario.save();

        res.status(200).json({
            ok: true,
            usuario
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok:false,
            msg: 'Error inesperado... revisar log'
        });
    }    

}

module.exports = {
    getUsuarios,
    postUsuario
}
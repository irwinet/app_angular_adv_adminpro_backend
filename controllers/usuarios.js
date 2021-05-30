const { response } = require('express');
const bcrypt = require('bcryptjs');

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

        // Encriptar contraseña
        const salt = bcrypt.genSaltSync();
        usuario.password = bcrypt.hashSync(password, salt);

        // Guardar Usuario
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

const putUsuario = async(req, res)=>{
    const uid = req.params.id;

    try {
        
        const usuarioDB = await Usuario.findById(uid);

        if(!usuarioDB){
            return res.status(404).json({
                ok: false,
                msg: 'No existe un usuario por ese id'
            });
        }

        // TODO: Validar token y comprobar si el usuario es correcto
        const campos = req.body;

        if(usuarioDB.email === campos.email){
            delete campos.email;
        }
        else{
            const existeEmail = await Usuario.findOne({email:campos.email});
            if(existeEmail){
                return res.status(400).json({
                    ok:false,
                    msg: 'Ya existe un usuario con ese email'
                });
            }
        }

        delete campos.password;
        delete campos.google;

        const usuarioActualizado = await Usuario.findByIdAndUpdate(uid, campos, {new:true});

        res.json({
            ok:true,
            usuario: usuarioActualizado
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok:false,
            msg: 'Error inesperado'
        });
    }
}

module.exports = {
    getUsuarios,
    postUsuario,
    putUsuario
}
import Usuario from '../models/user.model,js';
import bcrypt from 'bcryptjs'
import {createAccessToken} from '../libs/jwt.js'

export const register = async (req, res) => {
    const {email, contraseña, nombre} = req.body

    try {

        const contraseñaHasheada = await bcrypt.hash(contraseña, 10)

        const newUsuario = new Usuario({
            nombre,
            email,
            contraseña: contraseñaHasheada,
        })
    
        const usuarioSaved = await newUsuario.save();
        const token = await createAccessToken({id: usuarioSaved._id});

        res.cookie('token', token);
        res.json({
            id: usuarioSaved._id,
            nombre: usuarioSaved.nombre,
             email: usuarioSaved.email
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const login = async (req, res) => {
    const {email, contraseña} = req.body

    try {

       const usuarioEncontrado = await Usuario.findOne({email})

       if (!usuarioEncontrado) return res.status(400).json({message: "Usuario no encontrado"});

        const isMatch = await bcrypt.compare(contraseña, usuarioEncontrado.contraseña);
        if (!isMatch) return res.status(400).json({message: "Contraseña incorrecta"});

        const token = await createAccessToken({id: usuarioEncontrado._id});

        res.cookie('token', token);
        res.json({
            id: usuarioEncontrado._id,
            nombre: usuarioEncontrado.nombre,
            email: usuarioEncontrado.email
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const logOut = (req, res) => {
    res.cookie('token', "", {
        expires: new Date(0)
    });
    return res.sendStatus(200);
};

export const profile = async (req, res) => {
    const usuarioEncontrado = await Usuario.findById(req.user.id)

    if (!usuarioEncontrado) return res.status(400).json({ message: 'Usuario no encontrado'})
    
    return res.json({
        id: usuarioEncontrado._id,
        nombre: usuarioEncontrado.nombre,
        email: usuarioEncontrado.email
    })


    res.send('profile');
};
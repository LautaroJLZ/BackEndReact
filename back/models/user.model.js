import mongoose from "mongoose";

const usuarioSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        uniue: true,
    },
    contraseña: {
        type: String,
        required: true,

    }
}, {
    timestamps: true
})

export default mongoose.model('Usuario', usuarioSchema)
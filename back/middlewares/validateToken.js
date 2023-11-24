import jwt from 'jsonwebtoken'
import { SECRET_TOKEN } from '../config.js'

export const authRequired = (req, res, next) => {
    const { token } =req.cookies
    
    if (!token) return res.status(401).json({ message: "No hay token, autorización denegada" });

    jwt.verify(token, SECRET_TOKEN, (err, user) => {
        if (err) return res.status(403).json({ message: 'Token invalido' })

        req.user = user

        next();
    })    
}
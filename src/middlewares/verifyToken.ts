import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

export const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
    // Get the JWT from the request header.
    const token: any = req.headers['authorization']
    if (!token) {
        return res.status(403).send({
            message: 'No token provided!',
        })
    }
    const configJwtKey: any = process.env.JWTSECRETKEY
    jwt.verify(token?.split(' ')[1], configJwtKey, (err: any, decoded: any) => {
        if (err) {
            return res.status(401).send({
                message: 'Unauthorized!',
            })
        }
        next()
    })
}

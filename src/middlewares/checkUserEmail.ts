import { Request, Response, NextFunction } from 'express'
import user from '../database/models/user'

export const checkDuplicateUsernameOrEmail = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const users = await user.findOne({
            where: {
                email: req.body.email,
            },
        })
        if (users) {
            return res.status(400).send({
                status: 'error',
                message: 'Failed! Email is already in use!',
            })
        }
        next()
    } catch (error: any) {
        res.status(500).send({
            message: error.message || 'Some error occurred while creating the Tutorial.',
        })
    }
}

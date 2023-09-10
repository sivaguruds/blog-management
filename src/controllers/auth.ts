/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import { User } from '../types/interfaces'
import bcrypt from 'bcrypt'
// import { v4 as uuidv4 } from 'uuid'
import dotenv from 'dotenv'
import user from '../database/models/user'
import { RegisterSucessEmail } from '../email'

dotenv.config()

export const signUp = async (req: Request, res: Response) => {
    try {
        const salt = await bcrypt.genSalt(10)
        const users: User = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            mobile: req.body.mobile,
            email: req.body.email,
            password: await bcrypt.hash(req.body.password, salt),
            dob: req.body.dob,
            gender: req.body.gender,
            isVerify: false,
        }
        const results = await user.create(users)
        console.log(results)
        if (results) {
            RegisterSucessEmail(results.email, results.firstName)
            return res.status(201).send({
                message: 'user added successfully!',
                results: results,
            })
        }
    } catch (error: any) {
        res.status(500).send({
            message: error.message || 'Some error occurred while creating the Tutorial.',
        })
    }
}

export const signIn = async (req: Request, res: Response) => {
    try {
        const users = await user.findOne({
            where: {
                email: req.body.email,
            },
        })
        if (!users) {
            return res.status(404).send({
                status: 'error',
                message: 'Failed! User not found!',
            })
        }
        const passwordIsValid = bcrypt.compareSync(req.body.password, users.password)
        if (!passwordIsValid) {
            return res.status(404).send({
                status: 'error',
                message: 'Invalid password',
            })
        }

        const configJwtKey: any = process.env.JWTSECRETKEY
        const token = jwt.sign({ id: users.id }, configJwtKey, {
            algorithm: 'HS256',
            allowInsecureKeySizes: true,
            expiresIn: '1d', // 1 day
        })
        return res.status(201).send({
            message: 'User login successfully!',
            results: {
                id: users.id,
                firstName: users.firstName,
                lastName: users.lastName,
                email: users.email,
                mobile: users.mobile,
                gender: users.gender,
                dob: users.dob,
                accessToken: token,
            },
        })
    } catch (error: any) {
        res.status(500).send({
            message: error.message || 'Some error occurred while creating the Tutorial.',
        })
    }
}

export const allAccess = async (req: Request, res: Response) => {
    return res.status(201).send({
        message: 'Public Content.',
    })
}

export const userBoard = async (req: Request, res: Response) => {
    return res.status(201).send({
        message: 'User Content.',
    })
}

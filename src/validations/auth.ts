import { body } from 'express-validator'

export const registerRules = [
    body('firstName').not().isEmpty().withMessage('First name can not be empty!'),
    body('lastName').not().isEmpty().withMessage('Last name can not be empty!'),
    body('email').not().isEmpty().withMessage('Email can not be empty!').isEmail().withMessage('Provide valid email'),
    body('gender')
        .not()
        .isEmpty()
        .withMessage('Gender can not be empty!')
        .isString()
        .withMessage('Gender should be string')
        .isIn(['Male', 'Female', 'Other'])
        .withMessage('Gender value is invalid'),
]

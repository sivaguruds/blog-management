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

export const categorieRules = [
    body('title').not().isEmpty().withMessage('Title can not be empty!'),
    body('content').not().isEmpty().withMessage('content can not be empty!'),
]

export const tagRules = [
    body('title').not().isEmpty().withMessage('Title can not be empty!'),
    body('content').not().isEmpty().withMessage('content can not be empty!'),
]

export const postRules = [
    body('authorId').not().isEmpty().withMessage('Author id can not be empty!'),
    body('title').not().isEmpty().withMessage('title can not be empty!'),
    body('metaTitle').not().isEmpty().withMessage('meta title can not be empty!'),
    body('slug').not().isEmpty().withMessage('slug can not be empty!'),
    body('content').not().isEmpty().withMessage('content can not be empty!'),
]

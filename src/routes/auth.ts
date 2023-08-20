import { Router } from 'express'
import { checkDuplicateUsernameOrEmail, validate, verifyToken } from '../middlewares/index'
import { registerRules } from '../validations/auth'

const router = Router()

import { signUp, signIn, userBoard, allAccess } from '../controllers/auth'

router.post('/register', validate(registerRules), checkDuplicateUsernameOrEmail, signUp)
router.post('/login', signIn)
router.get('/all', allAccess)
router.get('/user', verifyToken, userBoard)

export default router

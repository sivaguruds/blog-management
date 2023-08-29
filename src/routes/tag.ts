import { Router } from 'express'
import { validate, verifyToken } from '../middlewares/index'
import { tagRules } from '../validations/validations'

const router = Router()

import { list, create, update, takeOut } from '../controllers/tag'

router.post('/tag', validate(tagRules), verifyToken, create)
router.get('/tag', verifyToken, list)
router.put('/tag/:id', validate(tagRules), verifyToken, update)
router.delete('/tag/:id', verifyToken, takeOut)

export default router

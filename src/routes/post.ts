import { Router } from 'express'
import { validate, verifyToken } from '../middlewares/index'
import { postRules } from '../validations/validations'
import { create, list } from '../controllers/post'

const router = Router()

router.post('/post', validate(postRules), create)
router.get('/post', list)

console.log(router)

export default router

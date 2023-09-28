import { Router } from 'express'
import { validate, verifyToken } from '../middlewares/index'
import { postRules } from '../validations/validations'
import { create, list, update, takeOut } from '../controllers/post'

const router = Router()

router.post('/post', validate(postRules), create)
router.get('/post', list)
router.patch('/post/:id', validate(postRules), update)
router.delete('/post/:id', takeOut)

console.log(router)

export default router

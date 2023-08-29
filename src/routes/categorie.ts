import { Router } from 'express'
import { validate, verifyToken } from '../middlewares/index'
import { categorieRules } from '../validations/validations'

const router = Router()

import { list, create, update, takeOut } from '../controllers/categorie'

router.post('/categorie', validate(categorieRules), verifyToken, create)
router.get('/categorie', verifyToken, list)
router.put('/categorie/:id', validate(categorieRules), verifyToken, update)
router.delete('/categorie/:id', verifyToken, takeOut)

export default router


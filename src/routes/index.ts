import { Router, Request, Response } from 'express'

const router = Router()

router.get('/api', (req: Request, res: Response) => {
    res.status(200).send({
        success: true,
        message: 'Welcome to the Node.js API',
    })
})

export default router

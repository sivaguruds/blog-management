import express from 'express'
import cors from 'cors'

const app = express()

// API routes:
import indexRoute from './routes/index'
import authRouter from './routes/auth'
import categorieRouter from './routes/categorie'
import tagRouter from './routes/tag'
import postRouter from './routes/post'

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.json({ type: 'application/vnd.api+json' }))
app.use(cors())

app.use(indexRoute)
app.use(authRouter)
app.use(categorieRouter)
app.use(tagRouter)
app.use(postRouter)

export default app

import express from 'express'
import cors from 'cors'

const app = express()

// API routes:
import indexRoute from './routes/index'
import authRouter from './routes/auth'

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.json({ type: 'application/vnd.api+json' }))
app.use(cors())

app.use(indexRoute)
app.use(authRouter)

export default app

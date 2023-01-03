import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import routes from './routes/index.js'
import { dbConnection } from './db/dbConnection.js'

dotenv.config()
await dbConnection(process.env.MONGO_URL)

const app = express()

app.set('port', process.env.PORT || 4000)

// Middlewares
app.use(cors())
app.use(express.static('public'))
app.use(express.json())

app.use('/api', routes)

export default app

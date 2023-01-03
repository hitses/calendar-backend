import { Router } from 'express'
const router = Router()

import authRoutes from './auth.js'

router.use('/auth', authRoutes)

export default router

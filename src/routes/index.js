import { Router } from 'express'
const router = Router()

import authRoutes from './auth.js'
import eventRoutes from './event.js'

router.use('/auth', authRoutes)
router.use('/events', eventRoutes)

export default router

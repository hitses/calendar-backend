import { Router } from 'express'
import { check } from 'express-validator'
import { fieldValidation } from '../middlewares/fieldValidation.js'
import { validateToken } from '../middlewares/validateToken.js'
const router = Router()

import * as authController from '../controllers/auth.js'

router.post(
  '/new',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Email is required').not().isEmpty(),
    check('email', 'Incorrect email').isEmail(),
    check('password', 'Password is required').not().isEmpty(),
    fieldValidation
  ],
  authController.createUser
)
router.post(
  '/',
  [
    check('email', 'Email is required').not().isEmpty(),
    check('email', 'Incorrect email').isEmail(),
    check('password', 'Password is required').not().isEmpty(),
    fieldValidation
  ],
  authController.loginUser
)
router.get('/renew', validateToken, authController.renewToken)

export default router

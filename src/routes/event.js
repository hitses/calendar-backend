import { Router } from 'express'
import { check } from 'express-validator'
import { fieldValidation } from '../middlewares/fieldValidation.js'
import { validateToken } from '../middlewares/validateToken.js'
import * as eventController from '../controllers/event.js'
import { isDate } from '../helpers/isDate.js'

const router = Router()
router.use(validateToken)

// router.get('/:id', eventController.getEvent)
router.get('/', eventController.getEvents)
router.post(
  '/',
  [
    check('title', 'Title is required').not().isEmpty(),
    check('start', 'Start date is required').not().isEmpty(),
    check('start', 'Start date must be a Date').custom(isDate),
    check('end', 'End date is required').not().isEmpty(),
    check('end', 'End date must be a Date').custom(isDate),
    fieldValidation
  ],
  eventController.createEvent
)
router.put('/:id', eventController.updateEvent)
router.delete('/:id', eventController.deleteEvent)

export default router

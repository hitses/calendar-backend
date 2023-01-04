import Event from '../../models/event.js'
import {
  internalServerError,
  createdEvent
} from '../../helpers/errors/event/index.js'

export const createEvent = async (uid, event) => {
  try {
    const newEvent = new Event(event)
    newEvent.user = uid
    await newEvent.save()

    return createdEvent(newEvent)
  } catch (err) {
    return internalServerError('createEvent()', err)
  }
}

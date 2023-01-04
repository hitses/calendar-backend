import event from '../../models/event.js'
import {
  internalServerError,
  events
} from '../../helpers/errors/event/index.js'

export const getEvents = async () => {
  try {
    const allEvents = await event.find().populate('user', 'name')
    return events(allEvents)
  } catch (err) {
    return internalServerError('getEvent()', err)
  }
}

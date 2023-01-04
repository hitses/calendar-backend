import Event from '../../models/event.js'
import {
  internalServerError,
  deletedEvent
} from '../../helpers/errors/event/index.js'

export const deleteEvent = async (uid, eid) => {
  try {
    const event = await Event.findById(eid)
    if (!event) return eventNotFound(eid)

    if (event.user.toString() !== uid) return notAllowed(uid)

    await Event.findByIdAndDelete(eid)

    return deletedEvent(eid)
  } catch (err) {
    return internalServerError('deleteEvent()', err)
  }
}

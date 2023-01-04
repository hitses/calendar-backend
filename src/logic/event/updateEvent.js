import Event from '../../models/event.js'
import {
  eventNotFound,
  internalServerError,
  notAllowed,
  updatedEvent
} from '../../helpers/errors/event/index.js'

export const updateEvent = async (uid, eid, event) => {
  try {
    const oldEvent = await Event.findById(eid)
    if (!oldEvent) return eventNotFound(eid)

    if (oldEvent.user.toString() !== uid) return notAllowed(uid)

    const newEvent = await Event.findByIdAndUpdate(
      eid,
      { ...event, user: uid },
      { new: true }
    )

    return updatedEvent(newEvent)
  } catch (err) {
    return internalServerError('updateEvent()', err)
  }
}

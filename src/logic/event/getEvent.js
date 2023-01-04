import { internalServerError, event } from '../../helpers/errors/event/index.js'

export const getEvent = async () => {
  try {
    return event()
  } catch (err) {
    return internalServerError('getEvent()', err)
  }
}

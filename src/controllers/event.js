import * as eventLogic from '../logic/event/index.js'

export const getEvent = async (req, res) => {
  const getEvent = await eventLogic.getEvent()
  res.status(getEvent.status).json(getEvent.data)
}

export const getEvents = async (req, res) => {
  const getEvents = await eventLogic.getEvents()
  res.status(getEvents.status).json(getEvents.data)
}

export const createEvent = async (req, res) => {
  const createEvent = await eventLogic.createEvent(req.uid, req.body)
  res.status(createEvent.status).json(createEvent.data)
}

export const updateEvent = async (req, res) => {
  const updateEvent = await eventLogic.updateEvent(
    req.uid,
    req.params.id,
    req.body
  )
  res.status(updateEvent.status).json(updateEvent.data)
}

export const deleteEvent = async (req, res) => {
  const deleteEvent = await eventLogic.deleteEvent(req.uid, req.params.id)
  res.status(deleteEvent.status).json(deleteEvent.data)
}

export const updatedEvent = event => {
  return { status: 200, data: { ok: true, event } }
}

export const eventNotFound = id => {
  return {
    status: 404,
    data: { ok: false, message: `Event with ID ${id} not found` }
  }
}

export const notAllowed = uid => {
  return {
    status: 401,
    data: {
      ok: false,
      message: `User with ID ${uid} are not allowed to do this`
    }
  }
}

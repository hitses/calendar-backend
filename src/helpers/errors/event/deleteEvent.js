export const deletedEvent = eid => {
  return {
    status: 200,
    data: { ok: true, msg: `Event with ID ${eid} deleted correctly` }
  }
}

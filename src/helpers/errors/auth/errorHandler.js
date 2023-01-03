export const internalServerError = resp => {
  return { status: 500, data: { ok: false, ...resp } }
}

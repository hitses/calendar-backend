export const internalServerError = (method, err) => {
  return {
    status: 500,
    data: { ok: false, message: `Error in ${method} => ${err}` }
  }
}

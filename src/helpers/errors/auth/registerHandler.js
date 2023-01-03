export const userAlredyRegistered = () => {
  return { status: 400, data: { ok: false, message: 'User already exists' } }
}

export const userRegistered = (name, email, uid) => {
  return {
    status: 201,
    data: {
      ok: true,
      user: { name, email, uid }
    }
  }
}

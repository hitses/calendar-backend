export const badRequestLogin = () => {
  return {
    status: 400,
    data: { ok: false, message: 'Email or password is incorrect' }
  }
}

export const logged = (user, token) => {
  return {
    status: 200,
    data: { ok: true, user: { uid: user._id, name: user.name, token } }
  }
}

import * as authLogic from '../logic/auth/index.js'

export const createUser = async (req, res) => {
  const createUser = await authLogic.createUser(req.body)
  res.status(createUser.status).json(createUser.data)
}

export const loginUser = async (req, res) => {
  const loginUser = await authLogic.loginUser(req.body)
  res.status(loginUser.status).json(loginUser.data)
}

export const renewToken = async (req, res) => {
  const renewToken = await authLogic.renewToken(req.uid, req.name)
  res.status(renewToken.status).json(renewToken.data)
}

import jwt from 'jsonwebtoken'
import { InvalidToken, notFoundToken } from '../helpers/errors/auth/index.js'

export const validateToken = (req, res, next) => {
  try {
    const token = req.header('x-token')
    if (!token) return res.status(401).json(notFoundToken())

    const { uid, name } = jwt.verify(token, process.env.SECRET_JWT_SEED)
    req.uid = uid
    req.name = name
  } catch (error) {
    return res.status(401).json(InvalidToken())
  }

  next()
}

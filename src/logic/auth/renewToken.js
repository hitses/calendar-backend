import {
  internalServerError,
  newToken
} from '../../helpers/errors/auth/index.js'
import { generateToken } from '../../helpers/jwt.js'

export const renewToken = async (uid, name) => {
  try {
    return newToken(await generateToken({ uid, name }))
  } catch (err) {
    return internalServerError('renewToken()', err)
  }
}

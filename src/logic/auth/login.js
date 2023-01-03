import User from '../../models/user.js'
import {
  badRequestLogin,
  logged,
  internalServerError
} from '../../helpers/errors/auth/index.js'
import { generateToken } from '../../helpers/jwt.js'

export const loginUser = async ({ email, password }) => {
  try {
    const user = await User.findOne({ email })
    if (!user || !(await user.validatePassword(password, user.password)))
      return badRequestLogin()

    const token = await generateToken({ uid: user._id, name: user.name })

    return logged(user, token)
  } catch (err) {
    return internalServerError({ method: `loginUser()`, err })
  }
}

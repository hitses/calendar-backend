import User from '../../models/user.js'
import {
  userAlredyRegistered,
  internalServerError,
  userRegistered
} from '../../helpers/errors/auth/index.js'
// import { generateToken } from '../../helpers/jwt.js'

export const createUser = async user => {
  try {
    const { name, email /* password */ } = user

    if (await User.findOne({ email })) return userAlredyRegistered()

    const newUser = new User(user)
    newUser.password = await newUser.encryptPassword(newUser.password)
    await newUser.save()

    // todo generate token

    return userRegistered(name, email, newUser._id)
  } catch (err) {
    return internalServerError({ method: `createUser()`, err })
  }
}

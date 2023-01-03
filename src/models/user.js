import { Schema, model } from 'mongoose'
import bcrypt from 'bcryptjs'

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
)

userSchema.methods.encryptPassword = async password => {
  const salt = await bcrypt.genSalt(12)
  return bcrypt.hash(password, salt)
}

userSchema.methods.validatePassword = async (password, bdPassword) => {
  return await bcrypt.compare(password, bdPassword)
}

export default model('User', userSchema)

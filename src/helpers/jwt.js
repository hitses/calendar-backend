import jwt from 'jsonwebtoken'

export const generateToken = ({ uid, name }) => {
  return new Promise((resolve, reject) => {
    const payload = { uid, name }

    jwt.sign(
      payload,
      process.env.SECRET_JWT_SEED,
      {
        expiresIn: '24h'
      },
      (err, token) => {
        if (err) {
          console.log(err)
          reject('Could not generate token')
        }

        resolve(token)
      }
    )
  })
}

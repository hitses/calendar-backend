import mongoose from 'mongoose'

export const dbConnection = async uri => {
  try {
    mongoose.set('strictQuery', false)

    await mongoose.connect(uri)
    console.log('Databasse is connected')
  } catch (err) {
    console.log(err)
    throw new Error('Error in dbConnection() =>', err)
  }
}

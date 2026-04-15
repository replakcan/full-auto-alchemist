import mongoose from 'mongoose'
import 'dotenv/config'

const uri = process.env.MONGODB_URI + process.env.MONGODB_DB_NAME || 'mongodb://localhost:27017/fallback-db'

export async function connectDB() {
  try {
    await mongoose.connect(uri)
    console.log('MongoDB connected with Mongoose')
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

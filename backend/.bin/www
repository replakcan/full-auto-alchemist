import app from '../index.js'
import { connectDB } from '../db/conn.js'
import 'dotenv/config'

async function startServer() {
  await connectDB()

  app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}!`)
  })
}

startServer()

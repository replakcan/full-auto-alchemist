import express from 'express'
import cors from 'cors'
import blogRouter from './routes/blog.js'
import indexRouter from './routes/index.js'
import mongoose from 'mongoose'

const app = express()

app.use(
  cors({
    origin: 'http://localhost:3001',
  }),
)
app.use(express.json())

app.use('/', indexRouter)
app.use('/blogs', blogRouter)

app.get('/health', (req, res) => {
  if (mongoose.connection.readyState === 1) {
    return res.status(200).send('OK')
  }
  return res.status(500).send('DB not connected')
})

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

export default app
